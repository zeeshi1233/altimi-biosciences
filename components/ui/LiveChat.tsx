"use client";

import React, { useEffect } from "react";

/**
 * Tawk.to Live Chat Widget Integration
 * 
 * To activate live chat:
 * 1. Log in to your Tawk.to dashboard (https://dashboard.tawk.to)
 * 2. Go to Administration -> Chat Widget
 * 3. Copy your Property ID & Widget ID and paste below or set in .env.local:
 *    NEXT_PUBLIC_TAWKTO_PROPERTY_ID="your_property_id_here"
 *    NEXT_PUBLIC_TAWKTO_WIDGET_ID="your_widget_id_here" (defaults to "default" or "1xxxxxxx")
 */

// Paste your Tawk.to Property ID here (or use NEXT_PUBLIC_TAWKTO_PROPERTY_ID in .env.local)
export const TAWK_PROPERTY_ID =
  process.env.NEXT_PUBLIC_TAWKTO_PROPERTY_ID || "";

// Paste your Tawk.to Widget ID here (default or specific widget ID)
export const TAWK_WIDGET_ID =
  process.env.NEXT_PUBLIC_TAWKTO_WIDGET_ID || "default";

declare global {
  interface Window {
    Tawk_API?: Record<string, unknown>;
    Tawk_LoadStart?: Date;
  }
}

export const LiveChat: React.FC = () => {
  useEffect(() => {
    // Only mount if property ID is provided
    if (!TAWK_PROPERTY_ID || TAWK_PROPERTY_ID.trim() === "") {
      return;
    }

    if (document.getElementById("tawkto-script")) {
      return;
    }

    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    const script = document.createElement("script");
    script.id = "tawkto-script";
    script.async = true;
    script.src = `https://embed.tawk.to/${TAWK_PROPERTY_ID.trim()}/${TAWK_WIDGET_ID.trim()}`;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    const firstScript = document.getElementsByTagName("script")[0];
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    } else {
      document.head.appendChild(script);
    }

    return () => {
      // Clean up script on unmount if needed
      const existing = document.getElementById("tawkto-script");
      if (existing && existing.parentNode) {
        existing.parentNode.removeChild(existing);
      }
    };
  }, []);

  return null;
};
