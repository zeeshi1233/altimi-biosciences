import { NextRequest, NextResponse } from "next/server";
import { AGENT_TOOLS } from "@/lib/agent/tools";
import { SITE_METADATA, SITE_ROUTES, NAVIGATION_MENUS } from "@/lib/agent/sitemap";

// In-memory sliding-window rate limiter
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_MINUTE = 40;

function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true, remaining: MAX_REQUESTS_PER_MINUTE - 1 };
  }

  if (entry.count >= MAX_REQUESTS_PER_MINUTE) {
    return { allowed: false, remaining: 0 };
  }

  entry.count += 1;
  return { allowed: true, remaining: MAX_REQUESTS_PER_MINUTE - entry.count };
}

// Fallback models for maximum resilience and ultra-fast voice responses
const CANDIDATE_MODELS = [
  "gemini-3.5-flash-lite",
  "gemini-flash-lite-latest",
  "gemini-3.1-flash-lite",
  "gemini-3.5-flash",
  "gemini-3.8-flash",
];

export async function POST(req: NextRequest) {
  try {
    // 1. Rate Limiting
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "localhost";
    const { allowed, remaining } = checkRateLimit(ip);

    if (!allowed) {
      return NextResponse.json(
        {
          error: "Too many requests. Please pause for a moment and try again.",
          replyText: "You are speaking a bit fast for me! Please pause for a moment and try again.",
        },
        {
          status: 429,
          headers: {
            "Retry-After": "60",
            "X-RateLimit-Remaining": "0",
          },
        }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        {
          error: "GEMINI_API_KEY is not configured.",
          replyText: "My AI connection is currently offline. Please check that GEMINI_API_KEY is configured.",
        },
        { status: 500 }
      );
    }

    // 2. Parse incoming request
    const body = await req.json();
    const { userText, currentRoute, activeDropdown, history = [] } = body;

    if (!userText || typeof userText !== "string") {
      return NextResponse.json(
        { error: "Missing or invalid 'userText' field." },
        { status: 400 }
      );
    }

    // 3. Build comprehensive system instructions
    const systemInstruction = `
You are the intelligent Voice Assistant for "Altimi Biosciences (Pvt) Ltd." — Pakistan's premier distributor of clinical chemistry analyzers (Randox RX Modena & Imola), point-of-care testing (POCT), and hospital medical consumables.
You are embedded directly into the live website and can control the user's browser in real time.

Current Client State:
- Active Route: "${currentRoute || "/"}"
- Active Dropdown Menu: ${activeDropdown ? `"${activeDropdown}"` : "None"}

Site Overview & Contact:
- Company: ${SITE_METADATA.company}
- Location: ${SITE_METADATA.location}
- Phone: ${SITE_METADATA.phone}
- Email: ${SITE_METADATA.email}
- Hours: ${SITE_METADATA.workingHours}

All Available Routes:
${JSON.stringify(SITE_ROUTES, null, 2)}

Navigation Menus:
${JSON.stringify(NAVIGATION_MENUS, null, 2)}

CORE GUIDELINES:
1. Multi-Lingual Fluency:
   - The user may speak in English, Urdu, or Roman Urdu (e.g. "Mujhe RX Modena ki price or details btao", "About menu open karo", "Contact page pe chalo", "Hamara hospital Karachi me hai").
   - Respond naturally in the same language or friendly English/Urdu mix as appropriate.
   - Keep your spoken responses concise, friendly, professional, and clear (1-3 sentences maximum so the text-to-speech doesn't drone on).

2. Dropdown Interaction Flow:
   - When the user asks to open or see the "About" or "About Us" menu (e.g., "open About", "about us dropdown dikhao"):
     Call tool 'openDropdown' with { menu: 'about' }.
     In your replyText, state that you've opened the About menu, list the available options ("Executive Leadership" and "Nationwide Distribution"), and ask which one they would like to open.
   - When the user asks to open or see the "Products" menu:
     Call tool 'openDropdown' with { menu: 'products' }.
     In your replyText, state that you've opened the Products catalog, mention key categories (Randox Clinical Chemistry analyzers and Disposables/Consumables), and ask which one they want to explore.
   - If a dropdown is already open and the user picks an option (e.g., "show leadership" or "distribution"):
     Call 'selectDropdownItem' with the corresponding label and path.

3. Ambiguity & Clarification:
   - If the user's request is vague or ambiguous (e.g., they just say "Show me specs" or "Tell me the price"), ask a polite clarifying question instead of guessing, or navigate to the relevant overview page while explaining.
   - For product inquiries, mention that Altimi Biosciences provides turnkey hospital proposals, maintenance contracts, and DRAP-compliant equipment across Pakistan.

4. Form Safety & Confirmation:
   - When user asks to fill form details (name, email, phone, subject, message), call 'fillContactForm' with field and value.
   - If the user asks to SUBMIT the form, DO NOT call 'submitContactForm' immediately unless they have explicitly confirmed (e.g., "Yes, submit it", "Haan bhej do", "Confirm").
   - If not yet confirmed, ask them: "I have filled your inquiry with [summary of fields]. Would you like me to submit it now?"

5. Navigation & Scrolling:
   - For general page changes, call 'navigate'.
   - For moving to specific sections on the current page, call 'scrollToSection'.
   - For small movements, call 'scroll'.
   - To return to the previous page, call 'goBack'.
`;

    // 4. Format contents with history
    const contents = [
      ...history.map((h: any) => ({
        role: h.role === "agent" ? "model" : h.role,
        parts: h.parts || [{ text: h.text || "" }],
      })),
      {
        role: "user",
        parts: [
          {
            text: `[Current Route: ${currentRoute}, Active Dropdown: ${activeDropdown || "none"}]\nUser says: ${userText}`,
          },
        ],
      },
    ];

    const payload = {
      system_instruction: {
        parts: [{ text: systemInstruction }],
      },
      contents,
      tools: [
        {
          function_declarations: AGENT_TOOLS,
        },
      ],
      generationConfig: {
        temperature: 0.3,
        maxOutputTokens: 500,
      },
    };

    // 5. Try candidate models in order
    let lastError: any = null;
    let geminiData: any = null;

    for (const model of CANDIDATE_MODELS) {
      try {
        const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          signal: AbortSignal.timeout(7000),
        });

        if (res.ok) {
          geminiData = await res.json();
          break; // Succeeded!
        } else {
          const errText = await res.text();
          console.warn(`Model ${model} returned status ${res.status}: ${errText}`);
          lastError = new Error(`Model ${model} failed (${res.status}): ${errText}`);
          // Continue to next model
        }
      } catch (err: any) {
        console.warn(`Error querying model ${model}:`, err.message);
        lastError = err;
      }
    }

    if (!geminiData || !geminiData.candidates || !geminiData.candidates[0]) {
      throw lastError || new Error("Failed to receive a valid candidate from Gemini API.");
    }

    const candidate = geminiData.candidates[0];
    const parts = candidate.content?.parts || [];

    let replyText = "";
    let toolCall: { name: string; args: Record<string, any> } | undefined = undefined;

    for (const part of parts) {
      if (part.text) {
        replyText += part.text;
      }
      if (part.functionCall) {
        toolCall = {
          name: part.functionCall.name,
          args: part.functionCall.args || {},
        };
      }
    }

    // Default spoken reply if tool called with no spoken text
    if (!replyText.trim() && toolCall) {
      switch (toolCall.name) {
        case "openDropdown":
          if (toolCall.args.menu === "about") {
            replyText = "I've opened the About menu. Would you like to view Executive Leadership or Nationwide Distribution?";
          } else {
            replyText = "I've opened the Products menu. We offer Randox clinical chemistry analyzers and medical consumables. Which would you like to explore?";
          }
          break;
        case "closeDropdown":
          replyText = "Closed the menu for you.";
          break;
        case "navigate":
          replyText = `Navigating to ${toolCall.args.path}.`;
          break;
        case "scrollToSection":
          replyText = `Scrolling to ${toolCall.args.id}.`;
          break;
        case "scroll":
          replyText = `Scrolling ${toolCall.args.direction}.`;
          break;
        case "selectDropdownItem":
          replyText = `Opening ${toolCall.args.label}.`;
          break;
        case "goBack":
          replyText = "Going back to the previous page.";
          break;
        case "fillContactForm":
          replyText = `Filled in ${toolCall.args.field} with "${toolCall.args.value}".`;
          break;
        case "submitContactForm":
          replyText = "Submitting your inquiry now.";
          break;
        default:
          replyText = "Executing your request.";
      }
    }

    return NextResponse.json({
      replyText: replyText.trim() || "How can I assist you with Altimi Biosciences today?",
      toolCall,
      remainingRateLimit: remaining,
    });
  } catch (error: any) {
    console.error("Agent API error:", error);
    return NextResponse.json(
      {
        error: error.message || "Internal server error occurred.",
        replyText: "I'm having a temporary connection issue. Please try again or type your message.",
      },
      { status: 500 }
    );
  }
}
