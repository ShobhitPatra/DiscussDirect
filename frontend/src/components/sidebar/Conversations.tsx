import useGetConversations from "../../hooks/useGetConversations";
import Loading from "../Loading";
import Conversation from "./Conversation";

const Conversations = () => {
  const { loading, sidebarConvos } = useGetConversations();

  return (
    <>
      <div className="flex flex-col overflow-auto">
        {!loading ? (
          sidebarConvos.map((c) => <Conversation key={c.id} conversation={c} />)
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};

export default Conversations;
