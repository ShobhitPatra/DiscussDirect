import { useAuthContext } from "../../context/AuthContext";
import { MessageType } from "../../types/global";

const Message = ({ message }: { message: MessageType }) => {
  const { authUser } = useAuthContext();
  const sender = message.senderId === authUser?.id;
  return (
    <>
      <div className={`chat chat-${sender ? "start" : "end"}`}>
        <div className="chat-bubble chat-bubble-primary bg-slate-800 text-slate-300 ">
          {message.body}
        </div>
      </div>
    </>
  );
};

export default Message;
