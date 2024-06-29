import { Send } from "lucide-react";

const MessageInput = () => {
  return (
    <>
      <div className="mt-auto flex justify-center items-center gap-2 p-1">
        <input
          type="text"
          placeholder="send message"
          className="w-full input input-bordered p-1 m-1 bg-slate-950 h-10  "
        ></input>
        <button className="btn btn-circle btn-md bg-green-700">
          <Send className="w-6" />
        </button>
      </div>
    </>
  );
};

export default MessageInput;
