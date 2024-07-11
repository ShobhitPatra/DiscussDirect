import useConversation from "../../store/UseConversation";
import { ConversationType } from "../../types/global";

const Conversation = ({ conversation }: { conversation: ConversationType }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  // console.log(selectedConversation?.id);
  const isSelected = conversation.id === selectedConversation?.id;
  return (
    <>
      <div
        className={`flex p-2 m-1 ${
          isSelected ? "bg-green-500" : "bg-slate-500"
        } bg-opacity-15 hover:bg-green-700 rounded-lg`}
        onClick={() => {
          setSelectedConversation(conversation);
          console.log(conversation.id);
        }}
      >
        <div className="avatar flex justify-center items-center md:p-2">
          <div className="mask mask-circle md:w-11 w-8">
            <img src={conversation.profilePic} />
          </div>
        </div>

        <div className="flex gap-2 items-center px-2 ">
          <div className="md:text-md text-sm text-slate-300 font-semibold">
            {conversation.fullName}
          </div>
        </div>
      </div>
      <div className="divider my-0 py-0 px-3 h-1" />
    </>
  );
};

export default Conversation;
