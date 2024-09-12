import myMap from "@/constants/nav-details";
import NavMenu from "@/ui-components/NavMenu";
import { useState } from "react";
import QMarkSVG from "./QMarkSVG";
import WidgetSVG from "./WidgetSVG";

function UpperWidget() {
  const [currentlyActive, setCurrentlyActive] = useState("about");

  return (
    <>
      <div className="relative top-[25px] left-[17px]">
        <QMarkSVG />
      </div>
      <div className="relative top-[60px] left-[8px]">
        <WidgetSVG />
      </div>
      <div className="relative top-[206px] left-[687px] w-2 h-16 rounded-lg bg-gradient-to-b from-[#888989] to-[#4A4E54] shadow-[4px_4px_4.9px_0px_rgba(0,0,0,0.25)]"></div>


      <div className="bg-[#363C43] h-[316px] w-[720px] rounded-3xl shadow-custom-no-blur shadow-black flex flex-col items-center justify-around -mt-52">
        <NavMenu currActive={currentlyActive} setActive={setCurrentlyActive} />

        {/* Content */}
        <div className="w-[611px] ">
          <p className="whitespace-pre-line text-[#969696] font-normal text-[20px]">
            {myMap.get(currentlyActive)}
          </p>
        </div>
      </div>
    </>
  );
}

export default UpperWidget;
