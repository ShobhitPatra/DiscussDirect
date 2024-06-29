import Conversations from "./Conversations";
import LogoutBtn from "./LogoutBtn";
import SearchBar from "./SearchBar";

const Sidebar = () => {
  return (
    <>
      <div className="flex flex-col border-r-2 border-slate-200  border-opacity-10">
        <SearchBar />
        <div className="divider px-3 white"></div>
        <Conversations />
        <LogoutBtn />
      </div>
    </>
  );
};

export default Sidebar;
