import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

const useLogout = () => {
  const { setAuthUser } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const logout = async () => {
    try {
      setLoading(true);
      const res = await fetch("api/auth/logout", {
        method: "POST",
      });
      const data = res.json();
      console.log(data);
      if (res.ok) {
        setAuthUser(null);
        alert("logged out successfully");
      }
    } catch (error) {
      console.log(error);
      alert(error);
    } finally {
      setLoading(false);
    }
  };
  return { logout, loading };
};
export default useLogout;
