const GenderBox = ({
  selectedGender,
  onCheckBoxChange,
}: {
  selectedGender: string;
  onCheckBoxChange: (gender: "male" | "female") => void;
}) => {
  return (
    <>
      <div className="flex gap-2 p-2">
        <div className="flex items-center justify-center gap-2">
          <label className="label">
            <span className="text-base text-white">male</span>
          </label>
          <input
            type="checkbox"
            checked={selectedGender === "male"}
            onChange={() => onCheckBoxChange("male")}
            className="checkbox bg-slate-800"
          />
        </div>
        <div className="flex items-center justify-center gap-2">
          <label className="label ">
            <span className="text-base text-white ">female</span>
          </label>
          <input
            type="checkbox"
            checked={selectedGender === "female"}
            onChange={() => onCheckBoxChange("female")}
            className="checkbox bg-slate-800"
          />
        </div>
      </div>
    </>
  );
};
export default GenderBox;
