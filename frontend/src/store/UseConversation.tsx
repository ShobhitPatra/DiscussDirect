import { create } from "zustand";
import { ConversationType, MessageType } from "../types/global";

interface ConversationState {
  selectedConversation: null | ConversationType;
  setSelectedConversation: (conversation: ConversationType | null) => void;
  messages: MessageType[];
  setMessages: (messages: MessageType[]) => void;
}

const useConversation = create<ConversationState>((set) => ({
  selectedConversation: null,
  setSelectedConversation: (conversation) =>
    set({ selectedConversation: conversation }),
  messages: [],
  setMessages: (messages) => set({ messages: messages }),
}));

export default useConversation;
