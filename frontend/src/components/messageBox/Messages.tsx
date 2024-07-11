import useGetMessages from "../../hooks/useGetMessages";
import Loading from "../Loading";
import Message from "./Message";

const Messages = () => {
  const { loading, messages } = useGetMessages();
  return (
    <>
      <div className="flex flex-col gap-2 overflow-auto">
        {loading ? (
          <Loading />
        ) : (
          messages.map((m) => <Message key={m.id} message={m} />)
        )}
      </div>
    </>
  );
};

export default Messages;
