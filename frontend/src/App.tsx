import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import { Login } from "./pages/Login";
import { useAuthContext } from "./context/AuthContext";
import Loading from "./components/Loading";

function App() {
  const { authUser, isLoading } = useAuthContext();
  console.log(authUser, isLoading);
  if (isLoading) return <Loading />;
  return (
    <>
      <div className="h-screen p-4 flex items-center justify-center">
        <Routes>
          <Route
            path="/"
            element={authUser ? <Home /> : <Navigate to={"/login"} />}
          ></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
