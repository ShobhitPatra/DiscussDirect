const Conversation = () => {
  return (
    <>
      <div className="flex p-2 m-1 bg-slate-500 bg-opacity-15 hover:bg-green-700   rounded-lg">
        <div className="avatar flex justify-center items-center md:p-2">
          <div className="mask mask-circle md:w-11 w-8">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>

        <div className="flex gap-2 items-center px-2 ">
          <div className="md:text-md text-sm text-slate-300 font-semibold">
            Shobhit Patra
          </div>
          <div className="md:text-md text-sm text-slate-300 font-semibold">
            emot
          </div>
        </div>
      </div>
      <div className="divider my-0 py-0 px-3 h-1" />
    </>
  );
};

export default Conversation;
