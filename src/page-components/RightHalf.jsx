import LowerWidget from "./LowerWidget";
import UpperWidget from "./UpperWidget";

function RightHalf() {
  return (
    <div className="flex flex-col gap-7 ">
      <UpperWidget />
      <div className="flex justify-center">
        <hr className="border-t-4 w-3/4 border-[#363C43] shadow-custom-no-blur" />
      </div>

      <LowerWidget />
      <div className="flex justify-center">
        <hr className="border-t-4 w-3/4 border-[#363C43] shadow-custom-no-blur" />
      </div>
    </div>
  );
}

export default RightHalf;
