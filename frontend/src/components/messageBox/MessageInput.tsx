import { Send } from "lucide-react";
import { useState } from "react";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { sendMessage, loading } = useSendMessage();
  const sendHandler = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("clicked");
    e.preventDefault();
    sendMessage(message);
    setMessage("");
  };
  return (
    <>
      <form
        onSubmit={sendHandler}
        className="mt-auto flex justify-center items-center gap-2 p-1"
      >
        <input
          type="text"
          placeholder="send message"
          className="w-full input input-bordered p-1 m-1 bg-slate-950 h-10  "
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></input>
        <button className="btn btn-circle btn-md bg-green-700 " type="submit">
          {!loading ? (
            <Send className="w-6" />
          ) : (
            <span className="loading loading-spinner" />
          )}
        </button>
      </form>
    </>
  );
};

export default MessageInput;
