import { create } from "zustand";
import { ConversationType } from "../types/global";

type MessageType = {
  id: string;
  body: string;
  senderId: string;
  createdAt: string;
};

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
