import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { QuestionWithSolution } from "../../components";
import "./QuizSolution.css";
const QuizSolution = () => {
  const { quiz, answers } = useSelector((store) => store.quizSlice);
  const { pointsPerQuestion, negativeMarking, negativeMarkPerQuestion } =
    quiz.instruction;
  const [result, setResult] = useState({
    totalScore: 0,
    rightAnswer: 0,
    wrongAnswer: 0,
    totalQuestion: 0,
  });

  useEffect(() => {
    //reset previous score
    setResult((prev) => ({
      ...prev,
      rightAnswer: 0,
      wrongAnswer: 0,
      totalQuestion: quiz.answers.length,
    }));

    //calculate score
    for (let i = 0; i < quiz.answers.length; i++) {
      if (quiz.answers[i] === answers[i]) {
        setResult((prev) => ({ ...prev, rightAnswer: prev.rightAnswer + 1 }));
      } else {
        setResult((prev) => ({ ...prev, wrongAnswer: prev.wrongAnswer + 1 }));
      }
    }
    setResult((prev) => ({
      ...prev,
      totalScore: negativeMarking
        ? prev.rightAnswer * pointsPerQuestion -
          prev.wrongAnswer * negativeMarkPerQuestion
        : prev.rightAnswer * pointsPerQuestion,
    }));
  }, [
    answers,
    quiz,
    negativeMarkPerQuestion,
    negativeMarking,
    pointsPerQuestion,
  ]);

  return (
    <div className="solution-page">
      <div className="typo-label">
        <p className="h1 flex-hz-center">{quiz.quizName}</p>
      </div>
      <div className="score-container">
        <div className="two-column">
          <p>Score</p>
          <p>:</p>
          <p className="temp1">
            {result.totalScore}/{result.totalQuestion * pointsPerQuestion}
          </p>
        </div>
        <div className="two-column">
          <p>Right Answer</p>
          <p>:</p>
          <p>
            {result.rightAnswer}/{result.totalQuestion}
          </p>
        </div>
        <div className="two-column">
          <p>Wrong Answer</p>
          <p>:</p>
          <p>
            {result.wrongAnswer}/{result.totalQuestion}
          </p>
        </div>
        <div className="two-column">
          <p>Time taken</p>
          <p>:</p>
          <p className="temp1">10 Minutes</p>
        </div>
      </div>
      <Link to="/" className="link-no-style flex-hz-center">
        <button className="btn btn-outlined p-1">Navigate To Home</button>
      </Link>
      <div className="question-container">
        {quiz.questions.map((question, index) => {
          return <QuestionWithSolution question={question} key={index} />;
        })}
      </div>
      <Link to="/" className="link-no-style flex-hz-center p-2">
        <button className="btn btn-outlined">Navigate To Home</button>
      </Link>
    </div>
  );
};

export { QuizSolution };
