import { useEffect, useState } from "react";
import { ConversationType } from "../types/global";

const useGetConversations = () => {
  const [sidebarConvos, setSidebarConvos] = useState<ConversationType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getSidebarConvos = async () => {
      try {
        setLoading(true);
        const res = await fetch("api/message/bulk");
        const data = await res.json();
        console.log(data);
        if (res.ok) {
          setSidebarConvos(data);
        } else {
          console.log("failed to fetch users");
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getSidebarConvos();
  }, []);

  return { sidebarConvos, loading };
};

export default useGetConversations;
