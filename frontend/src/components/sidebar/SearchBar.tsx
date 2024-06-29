import { Search } from "lucide-react";
const SearchBar = () => {
  return (
    <>
      <form className="p-2 flex gap-2 items-center">
        <input
          type="text"
          className="input input-bordered md:h-10 h-6 "
        ></input>
        <button
          type="submit"
          className="btn btn-sm md:btn-md btn-circle bg-green-500 text-slate-800 hover:bg-green-400 "
        >
          <Search className="w-10" />
        </button>
      </form>
    </>
  );
};

export default SearchBar;
