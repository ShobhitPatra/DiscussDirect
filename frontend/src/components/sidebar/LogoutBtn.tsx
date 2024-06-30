import { LogOut } from "lucide-react";

const LogoutBtn = ({ handleLogout }: { handleLogout: () => void }) => {
  return (
    <>
      <div className="flex p-2 mt-auto ">
        <LogOut
          className="text-slate-300 cursor-pointer"
          onClick={handleLogout}
        />
      </div>
    </>
  );
};

export default LogoutBtn;
