import React, { useContext, useState } from "react";
import { QuizContext } from "../Context/QuizHolder";


const Quiz = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="w-full h-screen flex justify-center items-center">
    
      <Box current={current} next={setCurrent} />
    </div>
  );
};

const Box = ({ current, next }) => {
  const { quizes, correct, setCorrect, setExit } = useContext(QuizContext);
  const [ans, setAns] = useState("");
  const saveNext = () => {
    if (quizes[current].correct === ans) {
      setCorrect(correct + 1);
    }
    setAns("");
    if((current+1) === quizes.length){
      setExit(true);
    }
    else{
    next(current + 1); //to increment ques number
    }
  };
  // console.log({current, next });
  return (
    <div className="w-[50%] h-[400px]">
      <div className="p-2 text-3x1">{current+1} {quizes[current].Question}</div>
      <div className="grid grid-cols-2">
        <div
          className={`p-2  border ${
            ans === "a" ? "bg-lavender-400 hover:text-white" : ""
          } hover: bg-lavender-400 hover:text-white duration-200 cursor-pointer`}
          onClick={() => setAns("a")}
        >
          {quizes[current].a}
        </div>
        <div
          className={`p-2 border ${
            ans === "b" ? "bg-lavender-400 hover:text-white" : ""
          } hover: bg-lavender-400 hover:text-white duration-200 cursor-pointer`}
          onClick={() => setAns("b")}
        >
          {quizes[current].b}
        </div>
        <div
          className={`p-2 border ${
            ans === "c" ? "bg-lavender-400 hover:text-white" : ""
          } hover: bg-lavender-400 hover:text-white duration-200 cursor-pointer`}
          onClick={() => setAns("c")}
        >
          {quizes[current].c}
        </div>{" "}
        <div
          className={`p-2 border ${
            ans === "d" ? "bg-lavender-400 hover:text-white" : ""
          } hover: bg-lavender-400 hover:text-white duration-200 cursor-pointer`}
          onClick={() => setAns("d")}
        >
          {quizes[current].d}
        </div>
      </div>
      <div className="flex jutify-between">
        <div className="cursor-pointer h-[30px] px-3 bg-lighyellow-700 text-white" onClick={()=>setAns("")}>Reset</div>
        <div
          className="cursor-pointer h-[30px] px-3 bg-lighgreen-700 text-white"
          onClick={saveNext}
        >
          Save & Next
        </div>
        <div className="cursor-pointer h-[30px] px-3 bg-red-700 text-white" onClick={()=>setExit(true)}>Exit</div>
      </div>
    </div>
  );
};

export default Quiz;
