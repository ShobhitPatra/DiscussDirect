import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-w-96 rounded-md hover:shadow-inner shadow-2xl  ">
        <div className="p-6 h-full w-full bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-slate-50 border-opacity-10">
          <h1 className="text-3xl font-semibold text-center text-white ">
            Login
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
                <span className="text-base text-white">password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input h-10 w-full input-bordered"
              ></input>
            </div>
            <div className="m-2">
              <Link to={"/signup"}>
                <span className="text-base text-slate-900 py-2 hover:underline hover:text-blue-400 ">
                  Don't have an account ?
                </span>
              </Link>
            </div>
            <div className="flex justify-center ">
              <button className="bg-green-500 w-full p-2 rounded-md m-2 hover:bg-green-400 hover:shadow-md hover:shadow-green-400/50">
                <span className="text-xl font-semibold text-slate-800">
                  Login
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
