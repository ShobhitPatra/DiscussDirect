import { Link } from "react-router-dom";
import GenderBox from "../components/GenderBox";

const Signup = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-w-96 rounded-md hover:shadow-inner shadow-2xl  ">
        <div className="p-6 h-full w-full bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-slate-50 border-opacity-10">
          <h1 className="text-3xl font-semibold text-center text-white ">
            Sign Up
          </h1>
          <form>
            <div>
              <label className="label p-2">
                <span className="text-white text-base ">username</span>
              </label>
              <input
                type="text"
                placeholder="username"
                className="input input-bordered w-full h-10"
              ></input>
            </div>
            <div>
              <label className="label p-2">
                <span className="text-base text-white">fullname</span>
              </label>
              <input
                type="text"
                placeholder="fullname"
                className="input h-10 w-full input-bordered"
              ></input>
            </div>
            <div>
              <label className="label p-2">
                <span className="text-base text-white">password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input h-10 w-full input-bordered"
              ></input>
            </div>
            <div>
              <label className="label p-2">
                <span className="text-base text-white">confirm password</span>
              </label>
              <input
                type="text"
                placeholder="confirm password"
                className="input h-10 w-full input-bordered"
              ></input>
            </div>
            <GenderBox />
            <Link to={"/login"}>
              <span className="text-base text-slate-900 p-2 hover:underline hover:text-blue-400 ">
                Existing user ?{" "}
              </span>
            </Link>
            <div className="flex justify-center ">
              <button className="bg-green-500 w-full p-2 rounded-md m-2 hover:bg-green-400 hover:shadow-md hover:shadow-green-400/50">
                <span className="text-xl font-semibold text-slate-800">
                  Sign up
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
