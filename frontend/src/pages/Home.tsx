import { MessageBox } from "../components/messageBox/MessageBox";
import Sidebar from "../components/sidebar/Sidebar";

const Home = () => {
  return (
    <>
      <div className="flex h-[80vh] w-full md:max-w-screen-sm bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-slate-50 border-opacity-10">
        <Sidebar />
        <MessageBox />
      </div>
    </>
  );
};

export default Home;
