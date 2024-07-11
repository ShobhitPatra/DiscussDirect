import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../store/UseConversation";
import { ConversationType } from "../../types/global";
import MessageInput from "./MessageInput";
import Messages from "./Messages";

type AuthUserType = {
  id: string;
  fullName: string;
  username: string;
  gender: string;
  profilePic: string;
};

export const MessageBox = () => {
  const { selectedConversation } = useConversation();
  const { authUser } = useAuthContext();
  return (
    <>
      {selectedConversation ? (
        <OnSelectTrue user={selectedConversation} />
      ) : (
        <OnSelectFalse user={authUser} />
      )}
    </>
  );
};

const OnSelectTrue = ({ user }: { user: ConversationType | null }) => {
  return (
    <>
      {" "}
      <div className="flex flex-col bg-slate-950 w-full bg-opacity-50 rounded-e-lg md:w-2/3">
        <div className="label p-2 text-xl bg-opacity-50 bg-slate-800 rounded-e-lg mb-2">
          <span className="md:text-xl text-sm md:font-semibold  text-white">
            To :{" "}
          </span>
          <span className="md:text-xl text-sm md:font-semibold text-blue-400  ">
            {user?.fullName}
          </span>
        </div>
        <Messages />
        <MessageInput />
      </div>
    </>
  );
};

const OnSelectFalse = ({ user }: { user: AuthUserType | null }) => {
  return (
    <>
      <div className="w-full label p-2 text-xl bg-opacity-50 bg-slate-800 rounded-e-lg mb-2 flex justify-center items-center">
        <div className="flex flex-col">
          <div className="p-2 text-xl font-semibold text-center">
            Welcome{" "}
            <span className="text-xl font-semibold text-blue-500">
              {user?.fullName}
            </span>
          </div>
          <div className="p-2 text-lg font-medium text-center">
            Select a chat to start messaging
          </div>
        </div>
      </div>
    </>
  );
};
