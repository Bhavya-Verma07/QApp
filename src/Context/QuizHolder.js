import React, { useState } from "react";
import { createContext } from "react";

const QuizContext = createContext();

const quizes = [
  { Question: "Q1", a: "Op1", b: "Op2", c: "Op3", d: "Op4", correct: "Op2" },
  { Question: "Q2", a: "Op1", b: "Op2", c: "Op3", d: "Op4", correct: "Op2" },
  { Question: "Q3", a: "Op1", b: "Op2", c: "Op3", d: "Op4", correct: "Op2" },
  { Question: "Q4", a: "Op1", b: "Op2", c: "Op3", d: "Op4", correct: "Op2" },
  { Question: "Q5", a: "Op1", b: "Op2", c: "Op3", d: "Op4", correct: "Op2" },
  { Question: "Q6", a: "Op1", b: "Op2", c: "Op3", d: "Op4", correct: "Op2" },
];

const QuizHolder = (props) => {
  const [start, setStart] = useState(false);
  const [exit, setExit] = useState(false);
  const [correct, setCorrect] = useState(0);

  return (
    <>
      <QuizContext.Provider value={{ start, exit, setStart, setExit,quizes, correct, setCorrect }}>
        {props.childern}
      </QuizContext.Provider>
    </>
  );
};

export default QuizHolder;
export { QuizContext };
