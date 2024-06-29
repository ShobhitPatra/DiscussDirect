import MessageInput from "./MessageInput";
import Messages from "./Messages";

export const MessageBox = () => {
  return (
    <>
      <div className="flex flex-col bg-slate-950 w-full bg-opacity-50 rounded-e-lg">
        <div className="label p-2 text-xl bg-opacity-50 bg-slate-950 rounded-e-lg mb-2">
          <span className="md:text-xl text-sm md:font-semibold  text-slate-300">
            To :{" "}
          </span>
          <span className="md:text-xl text-sm md:font-semibold text-blue-300">
            Shobhit Patra
          </span>
        </div>
        <Messages />
        <MessageInput />
      </div>
    </>
  );
};
