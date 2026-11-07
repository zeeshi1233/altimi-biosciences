"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  X,
  Send,
  Bot,
  User,
  Wrench,
  CheckCircle,
  HelpCircle,
  Globe,
  RefreshCw,
  Radio,
} from "lucide-react";
import { useAgentStore } from "@/stores/agentStore";
import { useUIStore } from "@/stores/uiStore";
import { Waveform } from "@/components/assistant/Waveform";
import { executeToolCall } from "@/lib/agent/dispatcher";

// Quick suggestion chips
const QUICK_SUGGESTIONS = [
  "Show Products",
  "Open About menu",
  "Randox RX Modena specs",
  "Contact Karachi logistics",
  "Fill contact form",
];

export const VoiceAssistant: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  // Zustand stores
  const {
    isOpen,
    setIsOpen,
    toggleOpen,
    agentState,
    setAgentState,
    hasStarted,
    setHasStarted,
    isMuted,
    toggleMute,
    language,
    setLanguage,
    messages,
    addMessage,
    clearMessages,
    pendingConfirmation,
    setPendingConfirmation,
  } = useAgentStore();

  const activeDropdown = useUIStore((state) => state.activeDropdown);

  // Local UI state
  const [textInput, setTextInput] = useState("");
  const [micSupported, setMicSupported] = useState(true);
  const [isListeningActive, setIsListeningActive] = useState(false);
  const [interimTranscript, setInterimTranscript] = useState("");

  // Refs for bulletproof SpeechRecognition lifecycle (avoids React stale closures & aborts)
  const recognitionRef = useRef<any>(null);
  const chatScrollRef = useRef<HTMLDivElement>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);

  const isSpeakingRef = useRef(false);
  const shouldListenRef = useRef(false);
  const isRecognizingRef = useRef(false);
  const accumulatedTranscriptRef = useRef("");
  const speechSilenceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // References to latest handlers
  const handleSendMessageRef = useRef<(text: string) => Promise<void>>(() => Promise.resolve());
  const speakTextRef = useRef<(text: string) => Promise<void>>(() => Promise.resolve());

  // Auto-scroll chat to bottom
  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [messages, interimTranscript, agentState]);

  // Initialize SpeechSynthesis
  useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      synthRef.current = window.speechSynthesis;
    }
  }, []);

  // Safe SpeechRecognition Start
  const startRecognition = useCallback(() => {
    if (!micSupported || !recognitionRef.current) return;
    shouldListenRef.current = true;
    setIsListeningActive(true);

    if (isSpeakingRef.current) return;
    if (isRecognizingRef.current) return;

    try {
      recognitionRef.current.start();
      setAgentState("listening");
    } catch (err: any) {
      if (err.name === "InvalidStateError") {
        isRecognizingRef.current = true;
        setAgentState("listening");
      } else {
        console.warn("SpeechRecognition start error:", err);
      }
    }
  }, [micSupported, setAgentState]);

  // Safe SpeechRecognition Stop
  const stopRecognition = useCallback(() => {
    shouldListenRef.current = false;
    setIsListeningActive(false);

    if (speechSilenceTimeoutRef.current) {
      clearTimeout(speechSilenceTimeoutRef.current);
      speechSilenceTimeoutRef.current = null;
    }

    if (recognitionRef.current && isRecognizingRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (e) {}
    }
    isRecognizingRef.current = false;
    setAgentState("idle");
  }, [setAgentState]);

  // Text-to-Speech function
  const speakText = useCallback(
    (text: string): Promise<void> => {
      return new Promise((resolve) => {
        if (!synthRef.current || isMuted) {
          resolve();
          return;
        }

        synthRef.current.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 1.0;
        utterance.pitch = 1.0;

        const voices = synthRef.current.getVoices();
        if (language === "ur-PK") {
          const urVoice = voices.find(
            (v) => v.lang.startsWith("ur") || v.name.toLowerCase().includes("urdu")
          );
          if (urVoice) utterance.voice = urVoice;
        } else {
          const preferredVoice = voices.find(
            (v) =>
              (v.name.includes("Google") ||
                v.name.includes("Natural") ||
                v.name.includes("Samantha") ||
                v.name.includes("Zira")) &&
              v.lang.startsWith("en")
          );
          if (preferredVoice) utterance.voice = preferredVoice;
        }

        utterance.onstart = () => {
          isSpeakingRef.current = true;
          setAgentState("speaking");
          // Pause mic during speech to avoid self-listening loop
          if (recognitionRef.current && isRecognizingRef.current) {
            try {
              recognitionRef.current.stop();
            } catch (e) {}
            isRecognizingRef.current = false;
          }
        };

        const finishSpeech = () => {
          isSpeakingRef.current = false;
          setAgentState("idle");

          // Resume listening after speech concludes with 250ms buffer
          if (shouldListenRef.current) {
            setTimeout(() => {
              if (
                shouldListenRef.current &&
                !isSpeakingRef.current &&
                !isRecognizingRef.current
              ) {
                try {
                  recognitionRef.current?.start();
                  setAgentState("listening");
                } catch (e) {}
              }
            }, 250);
          }
          resolve();
        };

        utterance.onend = finishSpeech;
        utterance.onerror = (e) => {
          console.warn("TTS error:", e);
          finishSpeech();
        };

        synthRef.current.speak(utterance);
      });
    },
    [isMuted, language, setAgentState]
  );
  speakTextRef.current = speakText;

  // Send message to Gemini Agent API
  const handleSendMessage = useCallback(
    async (userInput: string) => {
      const trimmed = userInput.trim();
      if (!trimmed) return;

      addMessage({
        sender: "user",
        text: trimmed,
      });

      setTextInput("");
      setInterimTranscript("");
      accumulatedTranscriptRef.current = "";
      setAgentState("thinking");

      // Check if user is confirming a pending action
      if (
        pendingConfirmation &&
        /^(yes|haan|confirm|submit|proceed|sure|go ahead|kar do|bhej do)/i.test(trimmed)
      ) {
        if (pendingConfirmation.type === "submitContactForm") {
          const res = await executeToolCall("submitContactForm", {}, router);
          addMessage({
            sender: "system",
            text: res.message,
            toolCall: { name: "submitContactForm", args: {} },
          });
          const confirmReply =
            "Your inquiry has been successfully submitted to Altimi Biosciences Karachi logistics!";
          addMessage({
            sender: "agent",
            text: confirmReply,
          });
          setPendingConfirmation(null);
          await speakTextRef.current(confirmReply);
          return;
        }
      }

      try {
        const history = messages
          .filter((m) => m.sender === "user" || m.sender === "agent")
          .slice(-6)
          .map((m) => ({
            role: m.sender === "user" ? ("user" as const) : ("model" as const),
            parts: [{ text: m.text }],
          }));

        const response = await fetch("/api/agent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userText: trimmed,
            currentRoute: pathname,
            activeDropdown: activeDropdown,
            history,
          }),
        });

        if (!response.ok) {
          const errData = await response.json().catch(() => ({}));
          throw new Error(errData.replyText || errData.error || "Request failed");
        }

        const data = await response.json();
        const { replyText, toolCall } = data;

        if (toolCall && toolCall.name) {
          if (toolCall.name === "submitContactForm" && !pendingConfirmation) {
            setPendingConfirmation({
              type: "submitContactForm",
              description: "Confirm sending inquiry to Altimi Biosciences",
            });
            const askConfirm =
              "I am ready to submit your contact inquiry. Would you like me to send it now?";
            addMessage({
              sender: "agent",
              text: askConfirm,
            });
            await speakTextRef.current(askConfirm);
            return;
          }

          const executionResult = await executeToolCall(
            toolCall.name,
            toolCall.args || {},
            router
          );

          addMessage({
            sender: "system",
            text: executionResult.message,
            toolCall: toolCall,
          });
        }

        if (replyText) {
          addMessage({
            sender: "agent",
            text: replyText,
          });
          await speakTextRef.current(replyText);
        } else {
          setAgentState(shouldListenRef.current ? "listening" : "idle");
        }
      } catch (error: any) {
        console.error("Agent error:", error);
        const errorMsg =
          error.message ||
          "I encountered an issue processing your request. Please try again.";
        addMessage({
          sender: "agent",
          text: errorMsg,
        });
        await speakTextRef.current(errorMsg);
      }
    },
    [
      addMessage,
      setAgentState,
      messages,
      pathname,
      activeDropdown,
      pendingConfirmation,
      router,
      setPendingConfirmation,
    ]
  );
  handleSendMessageRef.current = handleSendMessage;

  // Flush accumulated speech buffer (runs on silence or isFinal)
  const flushAccumulatedSpeech = useCallback(() => {
    if (speechSilenceTimeoutRef.current) {
      clearTimeout(speechSilenceTimeoutRef.current);
      speechSilenceTimeoutRef.current = null;
    }

    const textToProcess = accumulatedTranscriptRef.current.trim();
    if (textToProcess && textToProcess.length > 1) {
      accumulatedTranscriptRef.current = "";
      setInterimTranscript("");
      handleSendMessageRef.current(textToProcess);
    }
  }, []);

  // Initialize SpeechRecognition ONLY on mount or when language changes
  useEffect(() => {
    if (typeof window === "undefined") return;

    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setMicSupported(false);
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = language;
      recognition.maxAlternatives = 1;

      recognition.onstart = () => {
        isRecognizingRef.current = true;
        if (!isSpeakingRef.current) {
          setAgentState("listening");
        }
      };

      recognition.onresult = (event: any) => {
        if (isSpeakingRef.current) return;

        let finalTrans = "";
        let interimTrans = "";

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          const item = event.results[i];
          const transcriptText = item[0]?.transcript || "";
          if (item.isFinal) {
            finalTrans += transcriptText + " ";
          } else {
            interimTrans += transcriptText;
          }
        }

        const combined = (finalTrans + interimTrans).trim();
        if (combined) {
          accumulatedTranscriptRef.current = combined;
          setInterimTranscript(combined);
          setAgentState("listening");

          // Reset silence detection timer
          if (speechSilenceTimeoutRef.current) {
            clearTimeout(speechSilenceTimeoutRef.current);
          }

          // Debounce: if user pauses speaking for 1000ms, immediately flush & process command!
          speechSilenceTimeoutRef.current = setTimeout(() => {
            flushAccumulatedSpeech();
          }, 1000);
        }
      };

      recognition.onerror = (event: any) => {
        if (event.error === "not-allowed" || event.error === "service-not-allowed") {
          shouldListenRef.current = false;
          isRecognizingRef.current = false;
          setIsListeningActive(false);
          setAgentState("idle");
        } else if (event.error === "no-speech") {
          // Normal silence, let onend handle clean restart if listening
        } else if (event.error === "aborted") {
          isRecognizingRef.current = false;
        }
      };

      recognition.onend = () => {
        isRecognizingRef.current = false;

        // If any text remains un-flushed when recognition ends, process it immediately!
        if (accumulatedTranscriptRef.current.trim().length > 1) {
          flushAccumulatedSpeech();
        }

        // Clean auto-restart with 150ms timeout to avoid InvalidStateError in Chrome
        if (shouldListenRef.current && !isSpeakingRef.current) {
          setTimeout(() => {
            if (
              shouldListenRef.current &&
              !isSpeakingRef.current &&
              !isRecognizingRef.current
            ) {
              try {
                recognition.start();
                setAgentState("listening");
              } catch (e) {}
            }
          }, 150);
        } else if (!isSpeakingRef.current) {
          setAgentState("idle");
        }
      };

      recognitionRef.current = recognition;

      // If user had listening active before language switch, restart with new language
      if (shouldListenRef.current && !isSpeakingRef.current) {
        try {
          recognition.start();
        } catch (e) {}
      }
    } catch (e) {
      console.warn("Could not create SpeechRecognition:", e);
      setMicSupported(false);
    }

    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch (e) {}
        isRecognizingRef.current = false;
      }
      if (speechSilenceTimeoutRef.current) {
        clearTimeout(speechSilenceTimeoutRef.current);
      }
    };
  }, [language, flushAccumulatedSpeech, setAgentState]);

  // Toggle voice listening button
  const toggleListening = () => {
    if (!micSupported) {
      setIsOpen(true);
      return;
    }

    if (isListeningActive) {
      stopRecognition();
    } else {
      startRecognition();
    }
  };

  // Welcome flow on first user click
  const handleStartAssistant = async () => {
    setHasStarted(true);
    setIsOpen(true);

    // Initial greeting
    const welcomeText = "Welcome to Altimi Biosciences. How can I help you?";

    // Turn listening mode on
    shouldListenRef.current = true;
    setIsListeningActive(true);

    // Speak welcome message (which safely starts mic when done)
    await speakText(welcomeText);
  };

  // Language switch
  const handleToggleLanguage = () => {
    const nextLang = language === "en-US" ? "ur-PK" : "en-US";
    setLanguage(nextLang);
  };

  // Text input submission
  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (textInput.trim()) {
      handleSendMessage(textInput);
    }
  };

  // State-based styling for floating mic button
  const getMicButtonClasses = () => {
    switch (agentState) {
      case "listening":
        return "bg-primary text-white shadow-lg shadow-primary/40 ring-4 ring-primary/30 animate-pulse";
      case "thinking":
        return "bg-amber-500 text-white shadow-lg shadow-amber-500/40 ring-4 ring-amber-400/30";
      case "speaking":
        return "bg-secondary text-white shadow-lg shadow-secondary/40 ring-4 ring-secondary/30";
      case "idle":
      default:
        return "bg-ink text-white hover:bg-primary shadow-xl hover:shadow-glow-primary";
    }
  };

  return (
    <>
      {/* 1. Intro Modal on First Visit */}
      <AnimatePresence>
        {!hasStarted && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.94 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed bottom-6 right-6 z-50 max-w-sm sm:max-w-md w-[calc(100vw-3rem)]"
          >
            <div className="glass-panel p-6 rounded-3xl bg-white/95 backdrop-blur-2xl shadow-2xl border border-primary/20 relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white shrink-0 shadow-md">
                  <Bot className="w-6 h-6 animate-pulse" />
                </div>
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-secondary-dark">
                      Altimi AI Assistant
                    </span>
                    <button
                      onClick={() => setHasStarted(true)}
                      className="text-slate-400 hover:text-slate-600 p-1"
                      aria-label="Dismiss greeting"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <h4 className="font-heading font-black text-base text-ink">
                    Voice-Controlled Diagnostic Guide
                  </h4>
                  <p className="text-xs text-muted leading-relaxed">
                    Explore clinical chemistry analyzers, navigate dropdown menus, and fill quotation forms using English or Urdu voice commands.
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <span className="text-[11px] text-muted flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-primary" />
                  English & Urdu Voice
                </span>
                <button
                  type="button"
                  onClick={handleStartAssistant}
                  className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white text-xs font-bold shadow-md shadow-primary/30 flex items-center gap-2 transition-all duration-300 hover:scale-105"
                >
                  <Mic className="w-4 h-4" />
                  <span>Talk to Assistant</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Chat Transcript Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-4 sm:right-6 w-[94vw] max-w-sm sm:max-w-md bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-slate-200/90 z-50 flex flex-col overflow-hidden max-h-[580px]"
          >
            {/* Header */}
            <div className="p-4 sm:p-4.5 bg-gradient-to-r from-surface to-white border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold">
                    <Bot className="w-5 h-5" />
                  </div>
                  <span
                    className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white ${
                      agentState === "listening"
                        ? "bg-emerald-500 animate-ping"
                        : agentState === "thinking"
                        ? "bg-amber-500 animate-pulse"
                        : agentState === "speaking"
                        ? "bg-secondary"
                        : "bg-slate-400"
                    }`}
                  />
                </div>
                <div>
                  <h5 className="font-heading font-extrabold text-sm text-ink leading-tight flex items-center gap-1.5">
                    Altimi Voice Agent
                    <span
                      className={`text-[10px] font-semibold px-2 py-0.5 rounded-full capitalize flex items-center gap-1 ${
                        isListeningActive
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {isListeningActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      )}
                      {agentState}
                    </span>
                  </h5>
                  <p className="text-[10px] text-muted">
                    {language === "ur-PK" ? "اردو فعال ہے" : "Listening in English / Urdu"}
                  </p>
                </div>
              </div>

              {/* Header Action Buttons */}
              <div className="flex items-center gap-1">
                {/* Language Switch */}
                <button
                  type="button"
                  onClick={handleToggleLanguage}
                  className="px-2 py-1 rounded-lg text-[10px] font-bold text-slate-600 hover:text-primary hover:bg-slate-100 transition-colors"
                  title="Toggle language"
                >
                  {language === "en-US" ? "EN" : "اردو"}
                </button>

                {/* Mute/Unmute */}
                <button
                  type="button"
                  onClick={toggleMute}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-ink hover:bg-slate-100 transition-colors"
                  title={isMuted ? "Unmute Voice" : "Mute Voice"}
                  aria-label="Toggle mute"
                >
                  {isMuted ? (
                    <VolumeX className="w-4 h-4 text-rose-500" />
                  ) : (
                    <Volume2 className="w-4 h-4 text-emerald-600" />
                  )}
                </button>

                {/* Clear Chat */}
                <button
                  type="button"
                  onClick={clearMessages}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-ink hover:bg-slate-100 transition-colors"
                  title="Clear conversation"
                  aria-label="Clear chat"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>

                {/* Close Drawer */}
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-ink hover:bg-slate-100 transition-colors"
                  aria-label="Close Assistant Panel"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Chat Messages Body */}
            <div
              ref={chatScrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-3.5 max-h-[340px] text-xs"
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.sender !== "user" && (
                    <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                      {msg.sender === "system" ? (
                        <Wrench className="w-3.5 h-3.5 text-secondary" />
                      ) : (
                        <Bot className="w-3.5 h-3.5" />
                      )}
                    </div>
                  )}

                  <div
                    className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-primary text-white rounded-br-sm shadow-md"
                        : msg.sender === "system"
                        ? "bg-slate-100 text-slate-700 border border-slate-200/80 rounded-bl-sm font-mono text-[11px]"
                        : "bg-surface text-ink border border-slate-200/80 rounded-bl-sm shadow-sm"
                    }`}
                  >
                    {msg.toolCall && (
                      <div className="flex items-center gap-1.5 text-[10px] font-bold text-secondary uppercase tracking-wider mb-1">
                        <Wrench className="w-3 h-3" />
                        <span>Action: {msg.toolCall.name}</span>
                      </div>
                    )}
                    <p className="whitespace-pre-wrap">{msg.text}</p>
                  </div>

                  {msg.sender === "user" && (
                    <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center shrink-0 mt-0.5">
                      <User className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              ))}

              {/* Interim Live Transcript with active speech bubble */}
              {interimTranscript && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-end"
                >
                  <div className="max-w-[85%] rounded-2xl px-3.5 py-2.5 bg-gradient-to-r from-primary/15 to-primary/5 text-primary border border-primary/30 shadow-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary animate-ping shrink-0" />
                    <span className="font-medium italic">&ldquo;{interimTranscript}&rdquo;</span>
                  </div>
                </motion.div>
              )}

              {/* Pending Form Confirmation Prompt */}
              {pendingConfirmation && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200/90 text-amber-900 space-y-2.5"
                >
                  <div className="flex items-center gap-2 font-bold text-xs">
                    <HelpCircle className="w-4 h-4 text-amber-600" />
                    <span>Confirmation Required</span>
                  </div>
                  <p className="text-[11px]">
                    {pendingConfirmation.description}. Please confirm if you wish to transmit this inquiry.
                  </p>
                  <div className="flex items-center gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => handleSendMessage("Yes, confirm and submit inquiry")}
                      className="px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-[11px] flex items-center gap-1 shadow-sm"
                    >
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>Confirm & Send</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPendingConfirmation(null)}
                      className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 font-semibold text-[11px]"
                    >
                      Cancel
                    </button>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Quick Suggestions Chips */}
            <div className="px-4 py-2 bg-slate-50/80 border-t border-slate-100 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              <span className="text-[10px] font-bold text-muted uppercase shrink-0">
                Suggestions:
              </span>
              {QUICK_SUGGESTIONS.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => handleSendMessage(suggestion)}
                  className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-primary hover:border-primary/40 shrink-0 transition-colors shadow-2xs"
                >
                  {suggestion}
                </button>
              ))}
            </div>

            {/* Visual Waveform & Live Mic Status Bar */}
            <div className="px-4 py-2.5 bg-white flex items-center justify-between border-t border-slate-100">
              <div className="flex items-center gap-2.5">
                <Waveform state={agentState} barCount={6} />
                <span className="text-[10px] font-semibold text-slate-600 flex items-center gap-1.5">
                  {isListeningActive && (
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                  )}
                  {agentState === "listening"
                    ? "Mic Live • Listening to you..."
                    : agentState === "thinking"
                    ? "Consulting diagnostic index..."
                    : agentState === "speaking"
                    ? "Speaking response..."
                    : isListeningActive
                    ? "Mic Live (Speak any command)"
                    : "Microphone Paused"}
                </span>
              </div>

              {/* Mic Toggle Button */}
              {micSupported && (
                <button
                  type="button"
                  onClick={toggleListening}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm ${
                    isListeningActive
                      ? "bg-rose-500 hover:bg-rose-600 text-white"
                      : "bg-primary hover:bg-primary-dark text-white"
                  }`}
                  title={isListeningActive ? "Pause Microphone" : "Activate Microphone"}
                  aria-label={isListeningActive ? "Pause mic" : "Turn on mic"}
                >
                  {isListeningActive ? (
                    <>
                      <MicOff className="w-3.5 h-3.5" />
                      <span>Pause Mic</span>
                    </>
                  ) : (
                    <>
                      <Mic className="w-3.5 h-3.5" />
                      <span>Start Mic</span>
                    </>
                  )}
                </button>
              )}
            </div>

            {/* Fallback Text Input Form */}
            <form
              onSubmit={handleInputSubmit}
              className="p-3 bg-white border-t border-slate-200/80 flex items-center gap-2"
            >
              <input
                type="text"
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                placeholder={
                  language === "ur-PK"
                    ? "اپنا سوال لکھیں یا آواز سے بولیں..."
                    : "Type or speak (e.g. 'Open About menu')..."
                }
                className="flex-1 px-3.5 py-2.5 rounded-xl bg-surface border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
              />
              <button
                type="submit"
                disabled={!textInput.trim() || agentState === "thinking"}
                className="p-2.5 rounded-xl bg-primary text-white hover:bg-primary-dark disabled:opacity-40 transition-colors shadow-sm"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. Floating Bottom-Right Mic Button */}
      {hasStarted && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
        >
          {/* Quick status pill when drawer closed */}
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              onClick={() => setIsOpen(true)}
              className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-lg text-[11px] font-bold text-ink cursor-pointer hover:border-primary/40 transition-colors"
            >
              {isListeningActive && (
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
              )}
              <Waveform state={agentState} barCount={4} className="h-4" />
              <span>
                {agentState === "speaking"
                  ? "Speaking..."
                  : isListeningActive
                  ? "Mic Active (Listening)"
                  : "Ask Altimi AI"}
              </span>
            </motion.div>
          )}

          {/* Main Floating Trigger Button */}
          <button
            type="button"
            onClick={toggleOpen}
            className={`relative w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${getMicButtonClasses()}`}
            aria-label="Toggle voice assistant"
          >
            {/* Ripple rings when listening */}
            {agentState === "listening" && (
              <span className="absolute inset-0 rounded-2xl ring-4 ring-primary/40 animate-ping pointer-events-none" />
            )}

            {/* Glowing ring when speaking */}
            {agentState === "speaking" && (
              <span className="absolute -inset-1 rounded-2xl bg-secondary/30 blur-sm animate-pulse pointer-events-none" />
            )}

            {isOpen ? (
              <X className="w-6 h-6" />
            ) : agentState === "listening" ? (
              <Mic className="w-6 h-6" />
            ) : agentState === "speaking" ? (
              <Volume2 className="w-6 h-6" />
            ) : agentState === "thinking" ? (
              <RefreshCw className="w-6 h-6 animate-spin" />
            ) : (
              <Mic className="w-6 h-6" />
            )}
          </button>
        </motion.div>
      )}
    </>
  );
};
