import LowerWidget from "./LowerWidget"
import UpperWidget from "./UpperWidget"


function RightHalf() {
  return (
    <div className="flex flex-col gap-14">
      <UpperWidget />
      <LowerWidget />
    </div>
  )
}

export default RightHalf