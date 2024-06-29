import Conversation from "./Conversation";

const Conversations = () => {
  return (
    <>
      <div className="flex flex-col overflow-auto">
        <Conversation />
        <Conversation />
        <Conversation />
      </div>
    </>
  );
};

export default Conversations;
