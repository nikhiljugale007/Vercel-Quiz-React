import { useSelector } from "react-redux";
import "./QuizSolution.css";
const QuizSolution = () => {
  const { answers } = useSelector((store) => store.quizSlice);
  console.log("Ans = ", answers);
  return <div className="quiz-page">Solitio</div>;
};

export { QuizSolution };
