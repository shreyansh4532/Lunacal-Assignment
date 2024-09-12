// import Button from "@/ui-components/Button";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import QuestionMarkSVG from "../assets/question-mark.svg";
import myMap from "@/constants/nav-details";
import NavMenu from "@/ui-components/NavMenu";
import { useState } from "react";
import QMarkSVG from "./QMarkSVG";
import WidgetSVG from "./WidgetSVG";

function UpperWidget() {
  const [currentlyActive, setCurrentlyActive] = useState("about");

  return (
    <>
      {/* <img src={QuestionMarkSVG} alt="" className="w-8 h-8 relative top-[70px] left-3 q-mark--svg"/> */}
      <div className="absolute top-[55px] left-[520px]">
        <QMarkSVG />
      </div>
      <div className="absolute top-[145px] left-[512px]">
        <WidgetSVG />
      </div>
      {/* <QuestionMarkSVG className="relative top-16 left-3 text-2xl" /> */}
      <div className="bg-[#363C43] h-[316px] w-[720px] rounded-3xl shadow-custom-no-blur shadow-black flex flex-col items-center justify-around">
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
