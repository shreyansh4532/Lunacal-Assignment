import { useRef } from "react";
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";

function LowerWidget() {
  const inputRef = useRef();

  const uploadFiles = (e) => {
    console.log(e.target.files[0]);
  };

  const handleBtnClick = () => {
    // do something with input
    inputRef.current.click();
  };

  const moveSlider = (direction) => {
    const slider = document.getElementById("slider");
    const scrollAmount = slider.offsetWidth; // Scroll by one full image width

    if (direction === "left") {
      slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#363C43] h-[330px] w-[720px] rounded-3xl shadow-custom-no-blur shadow-black">
      <div className="mx-4 my-3 flex flex-col gap-20">
        {/* Top Nav */}
        <div className="flex justify-around">
          <button className="border-neutral-800 border-2 px-7 py-3 bg-black font-medium hover:text-white duration-200 transition-all rounded-2xl">
            Gallery
          </button>

          <div className="flex items-center justify-evenly gap-5">
            <button
              className="bg-[#6F787C] rounded-full py-2 px-4"
              onClick={handleBtnClick}
            >
              + Add Image
            </button>
            <input
              type="file"
              className="hidden"
              ref={inputRef}
              onChange={uploadFiles}
            />
            <button
              className="ml-2 bg-[#101213] transform active:scale-75 rounded-full text-3xl font-medium p-2 text-[#6F787C]"
              onClick={() => moveSlider("left")}
            >
              <HiOutlineArrowSmallLeft />
            </button>
            <button
              className="bg-[#101213] transform active:scale-75 rounded-full text-3xl font-medium p-2 text-[#6F787C]"
              onClick={() => moveSlider("right")}
            >
              <HiOutlineArrowSmallRight />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div id="slider" className="flex overflow-x-auto gap-3 scrollbar-hide">
          <div className="bg-[#343281] w-[120px] h-[120px] flex-shrink-0"></div>
          <div className="bg-[#343281] w-[120px] h-[120px] flex-shrink-0"></div>
          <div className="bg-[#343281] w-[120px] h-[120px] flex-shrink-0"></div>
          <div className="bg-[#343281] w-[120px] h-[120px] flex-shrink-0"></div>
          <div className="bg-[#343281] w-[120px] h-[120px] flex-shrink-0"></div>
          <div className="bg-[#343281] w-[120px] h-[120px] flex-shrink-0"></div>
          <div className="bg-[#343281] w-[120px] h-[120px] flex-shrink-0"></div>
          <div className="bg-[#343281] w-[120px] h-[120px] flex-shrink-0"></div>
        </div>
      </div>
    </div>
  );
}

export default LowerWidget;
