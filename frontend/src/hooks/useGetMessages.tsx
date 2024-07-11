import { useEffect, useState } from "react";
import { MessageType } from "../types/global";
import useConversation from "../store/UseConversation";

const useGetMessages = () => {
  const { selectedConversation } = useConversation();
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<MessageType[]>([]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        setLoading(true);
        console.log(`selectedConversation:${selectedConversation}`);
        if (!selectedConversation) return;
        const res = await fetch(`api/message/${selectedConversation.id}`);
        const data = await res.json();
        console.log(`data : ${data}`);
        if (res.ok) {
          setMessages(data);
        } else {
          console.log("failed to load messages");
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getMessages();
  }, [selectedConversation, setMessages]);

  return { loading, messages };
};

export default useGetMessages;
