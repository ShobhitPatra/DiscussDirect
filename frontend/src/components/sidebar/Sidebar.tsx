import useLogout from "../../hooks/useLogout";
import Loading from "../Loading";
import Conversations from "./Conversations";
import LogoutBtn from "./LogoutBtn";
import SearchBar from "./SearchBar";

const Sidebar = () => {
  const { loading, logout } = useLogout();
  const handleOnLogout = () => {
    logout();
  };
  if (loading) return <Loading />;
  return (
    <>
      <div className="flex flex-col border-r-2 border-slate-200  border-opacity-10 bg-slate-800 bg-opacity-30 rounded-s-lg md:w-1/3">
        <SearchBar />
        <div className="divider px-3 "></div>
        <Conversations />
        <LogoutBtn handleLogout={handleOnLogout} />
      </div>
    </>
  );
};

export default Sidebar;
