// import Button from "@/ui-components/Button";

import myMap from "@/constants/nav-details";
import NavMenu from "@/ui-components/NavMenu";
import { useState } from "react";

function UpperWidget() {
  const [currentlyActive, setCurrentlyActive] = useState("about");

  return (
    <div className="bg-[#363C43] h-1/2 rounded-3xl shadow-custom-no-blur shadow-black flex flex-col items-center justify-around">
      <NavMenu currActive={currentlyActive} setActive={setCurrentlyActive} />

      {/* Content */}
      <div className="w-4/5 ">
        <p className="whitespace-pre-line">{myMap.get(currentlyActive)}</p>
      </div>
    </div>
  );
}

export default UpperWidget;
