// import './App.css'
import LeftHalf from "./page-components/LeftHalf";
import RightHalf from "./page-components/RightHalf";

function App() {
  return (

      <div className="flex gap-4 m-4 p-5">
        <LeftHalf />
        <RightHalf />
      </div>
  );
}

export default App;
