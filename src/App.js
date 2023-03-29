import { useState } from "react";

import "./App.css";

function App() {
  {/*UseState used here to set or update value*/}
  const[count, setCount] = useState(0);     {/*count is intial value wch is 0 define in useState, setcount is that value jo + and - button pe click krne par comes*/}

  function decreaseHandler() {
  setCount(count-1);                  {/*whenever click on decreaseHandler function its decrease the value*/}
  }
  function increaseHandler() {
    setCount(count+1);               {/*whenever click on increaseHandler function its increase the value*/}
  }

  function resetHandler() {
    setCount(0);                  {/*whenever click on Reset button its set a value equal to 0*/}
  }
  return (
    <wrapper className=" w-[100vw] h-[100vh] flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-red-500 ... gap-10 ">
     
   <div className="text-[#0398d4] font-medium text-4xl">Increament and Decreament</div>
       
  {/*in this Div - , value, and + all comes in row position*/}
    <div className="bg-white flex flex-row justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]">

    <button onClick={decreaseHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl">
      -
     </button>

    <div className="font-bold gap-12 text-5xl">
     {count}
    </div>   

    <button  onClick={increaseHandler} className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl">
     +
   </button>

    </div>

      
      <button onClick={resetHandler} className="bg-[#0398d4]  text-white px-5 py-2 rounded-sm text-lg">
      RESET</button>

    </wrapper>
  );
}

export default App;
