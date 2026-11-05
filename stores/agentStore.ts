import { create } from "zustand";
import { AgentState, SupportedLanguage, ChatMessage } from "@/types/agent";

interface AgentStoreState {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  toggleOpen: () => void;

  agentState: AgentState;
  setAgentState: (state: AgentState) => void;

  hasStarted: boolean;
  setHasStarted: (started: boolean) => void;

  isMuted: boolean;
  setIsMuted: (muted: boolean) => void;
  toggleMute: () => void;

  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;

  messages: ChatMessage[];
  addMessage: (msg: Omit<ChatMessage, "id" | "timestamp">) => void;
  clearMessages: () => void;

  // Awaiting user confirmation for sensitive actions like form submission
  pendingConfirmation: {
    type: "submitContactForm";
    description: string;
  } | null;
  setPendingConfirmation: (conf: { type: "submitContactForm"; description: string } | null) => void;
}

export const useAgentStore = create<AgentStoreState>((set) => ({
  isOpen: false,
  setIsOpen: (open) => set({ isOpen: open }),
  toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),

  agentState: "idle",
  setAgentState: (agentState) => set({ agentState }),

  hasStarted: false,
  setHasStarted: (hasStarted) => set({ hasStarted }),

  isMuted: false,
  setIsMuted: (isMuted) => set({ isMuted }),
  toggleMute: () => set((state) => ({ isMuted: !state.isMuted })),

  language: "en-US",
  setLanguage: (language) => set({ language }),

  messages: [
    {
      id: "initial-msg",
      sender: "agent",
      text: "Welcome to Altimi Biosciences. How can I help you?",
      timestamp: Date.now(),
    },
  ],
  addMessage: (msg) =>
    set((state) => ({
      messages: [
        ...state.messages,
        {
          ...msg,
          id: `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
          timestamp: Date.now(),
        },
      ],
    })),
  clearMessages: () =>
    set({
      messages: [
        {
          id: "welcome-reset",
          sender: "agent",
          text: "Welcome to Altimi Biosciences. How can I help you?",
          timestamp: Date.now(),
        },
      ],
    }),

  pendingConfirmation: null,
  setPendingConfirmation: (pendingConfirmation) => set({ pendingConfirmation }),
}));

