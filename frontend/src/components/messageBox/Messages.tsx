import Message from "./Message";

const Messages = () => {
  return (
    <>
      <div className="flex flex-col gap-2 overflow-auto">
        <Message />
        <Message />
        <Message />
      </div>
    </>
  );
};

export default Messages;
