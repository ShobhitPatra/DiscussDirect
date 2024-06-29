import Conversations from "./Conversations";
import LogoutBtn from "./LogoutBtn";
import SearchBar from "./SearchBar";

const Sidebar = () => {
  return (
    <>
      <div className="flex flex-col border-r-2 border-slate-200  border-opacity-10 bg-slate-800 bg-opacity-30 rounded-s-lg">
        <SearchBar />
        <div className="divider px-3 "></div>
        <Conversations />
        <LogoutBtn />
      </div>
    </>
  );
};

export default Sidebar;
