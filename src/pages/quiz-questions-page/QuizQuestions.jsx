import { useState } from "react";
import { useSelector } from "react-redux";
import { Question } from "../../components";
import "./QuizQuestions.css";
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
      <div class="category-heading typo-label">
        <p class="h1 flex-hz-center">{quiz.quizName}</p>
      </div>
      <div class="question-container">
        {console.log(currentQuestionIndex)}
        <Question question={quiz.questions[currentQuestionIndex]} />
        <div class="flex-hz-space-bw full-width">
          <button
            class="btn btn-text"
            disabled={currentQuestionIndex === 0}
            onClick={goToPreviousQuestion}
          >
            PREV
          </button>
          {currentQuestionIndex === quiz.questions.length - 1 ? (
            <button class="btn btn-text">FINISH</button>
          ) : (
            <button
              class="btn btn-text"
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
