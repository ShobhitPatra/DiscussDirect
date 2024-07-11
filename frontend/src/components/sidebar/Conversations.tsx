import useGetConversations from "../../hooks/useGetConversations";
import Loading from "../Loading";
import Conversation from "./Conversation";

const Conversations = () => {
  const { loading, sidebarConvos } = useGetConversations();
  return (
    <>
      <div className="flex flex-col overflow-auto">
        {!loading ? (
          sidebarConvos.map((conversation) => (
            <Conversation
              key={conversation.id}
              profilePicLink={conversation.profilePic}
              name={conversation.fullName}
            />
          ))
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};

export default Conversations;
