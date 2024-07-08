import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

type AuthUserType = {
  id: string;
  fullName: string;
  username: string;
  gender: string;
  profilePic: string;
};

const AuthContext = createContext<{
  authUser: AuthUserType | null;
  setAuthUser: Dispatch<SetStateAction<AuthUserType | null>>;
  isLoading: boolean;
}>({
  authUser: null,
  setAuthUser: () => {},
  isLoading: true,
});
export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [authUser, setAuthUser] = useState<AuthUserType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAuthUser = async () => {
      try {
        const res = await fetch("/api/auth/me");
        const data = await res.json();
        if (res.ok) {
          setAuthUser(data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
        console.log(`AuthUser : ${authUser}`);
      }
    };
    fetchAuthUser();
  }, []);
  return (
    <>
      <AuthContext.Provider
        value={{
          authUser,
          setAuthUser,
          isLoading,
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};
