import { useAuthContext } from "../../context/AuthContext";
import { MessageType } from "../../types/global";

const Message = ({ message }: { message: MessageType }) => {
  const { authUser } = useAuthContext();
  const fromMe = message.senderId === authUser?.id;
  const chatEnd = fromMe ? "chat-start" : "chat-end";
  return (
    <>
      <div className={`chat ${chatEnd}`}>
        <div className="chat-bubble">{message.body}</div>
      </div>
    </>
  );
};

export default Message;
