import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Question } from "../../components";
import "./QuizQuestions.css";
import { Helmet } from "react-helmet";

const QuizQuestions = () => {
  const { quiz } = useSelector((store) => store.quizSlice);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const goToNextQuestion = () => {
    setCurrentQuestionIndex((prev) => prev + 1);
  };
  const goToPreviousQuestion = () => {
    setCurrentQuestionIndex((prev) => prev - 1);
  };
  return (
    <div className="question-page">
      <Helmet>
        <title>QuizQuestion | VercelQuiz</title>
      </Helmet>
      <div className="category-heading typo-label">
        <p className="h1 flex-hz-center">{quiz.quizName}</p>
      </div>
      <div className="question-container">
        <Question question={quiz.questions[currentQuestionIndex]} />
        <div className="flex-hz-space-bw full-width">
          <button
            className="btn btn-text"
            disabled={currentQuestionIndex === 0}
            onClick={goToPreviousQuestion}
          >
            PREV
          </button>
          {currentQuestionIndex === quiz.questions.length - 1 ? (
            <Link to="/quiz/answers" className="link-no-style">
              <button className="btn btn-text">FINISH</button>
            </Link>
          ) : (
            <button
              className="btn btn-text"
              onClick={goToNextQuestion}
              disabled={currentQuestionIndex === quiz.questions.length - 1}
            >
              NEXT
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export { QuizQuestions };
