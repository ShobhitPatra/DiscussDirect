import { useState } from "react";
import useConversation from "../store/UseConversation";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();
  const sendMessage = async (messageBody: string) => {
    try {
      setLoading(true);
      const res = await fetch(`api/message/send/${selectedConversation?.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messageBody }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setMessages([...messages, data]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(true);
    }
  };
  return { sendMessage, loading };
};

export default useSendMessage;
