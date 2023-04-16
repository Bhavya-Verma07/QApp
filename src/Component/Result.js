import React, { useContext } from "react";
import { QuizContext } from "../Context/QuizHolder";
// import Quiz from "./Quiz";
// import Start from "./Start";

const Result = () => {
  const { correct, setExit, setStart, quizes } = useContext(QuizContext);
  const playAgain = () => {
    setExit(false);
    setStart(false);
}
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-[50%] h-[400px]">
          <h2 className="text-2xl p-3 my-2">
            {correct} are correct out of {quizes.length}
          </h2>
          <button
            onClick={playAgain}
            className="border border-orange-500 p-3 text-2xl rounded"
          >
            Play agian
          </button>
        </div>
      </div>
    </>
  );
};

export default Result;
