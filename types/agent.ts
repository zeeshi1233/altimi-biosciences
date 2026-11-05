export type AgentState = "idle" | "listening" | "thinking" | "speaking";

export type SupportedLanguage = "en-US" | "ur-PK";

export interface ChatMessage {
  id: string;
  sender: "user" | "agent" | "system";
  text: string;
  timestamp: number;
  toolCall?: {
    name: string;
    args: Record<string, any>;
  };
}

export interface AgentApiRequest {
  userText: string;
  currentRoute: string;
  activeDropdown: string | null;
  history?: Array<{
    role: "user" | "model";
    parts: Array<{ text?: string; functionCall?: any; functionResponse?: any }>;
  }>;
}

export interface AgentApiResponse {
  replyText: string;
  toolCall?: {
    name: string;
    args: Record<string, any>;
  };
  clarificationNeeded?: boolean;
  requiresConfirmation?: boolean;
}

