import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

type LoginInputsType = {
  username: string;
  password: string;
};

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const login = async (inputs: LoginInputsType) => {
    try {
      setLoading(true);
      const res = await fetch("/api/auth/login", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });
      const data = await res.json();
      if (res.ok) {
        setAuthUser(data);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  return { login, loading };
};
export default useLogin;
