import "./App.css";
import Start from "./Component/Start";
import Quiz from "./Component/Quiz";
import Result from "./Component/Result";
import { QuizContext } from "./Context/QuizHolder";
import { useContext } from "react";

function App() {
  const { start, exit } = useContext(QuizContext);

  return (
    <>
    {
      exit === false?
    <>
      {
        start === true ? 
        <Quiz />
         :
          <Start />
          }</>
    
    :
      <Result />
    }
    </>
  );
}

export default App;
