import { useSelector } from "react-redux";
import "./Question.css";
import { BsCheck } from "react-icons/bs";
import { GrFormClose } from "react-icons/gr";
const QuestionWithSolution = ({ question }) => {
  const { questionNumber, options } = question;
  const { quiz, answers } = useSelector((store) => store.quizSlice);
  const markRightOption = ({ index }) => {
    return quiz.answers[questionNumber - 1] === index + 1;
  };
  const checkUserAnswer = () => {
    return quiz.answers[questionNumber - 1] === answers[questionNumber - 1];
  };
  return (
    <div>
      <div className="flex-hz-space-bw full-width">
        <p>Question: {questionNumber}</p>
      </div>
      <div>
        <p className="typo-label">{question.question}</p>
        <div className="option-container">
          {options.map((option, index) => {
            return (
              <div key={index}>
                {markRightOption({ index }) ? (
                  <button className="btn btn-success btn-with-icon btn-no-hover">
                    <BsCheck />
                    {option}
                  </button>
                ) : checkUserAnswer() ? (
                  <button className="btn btn-extra-option">{option}</button>
                ) : answers[questionNumber - 1] === index + 1 ? (
                  <button className="btn btn-danger">
                    <GrFormClose />
                    {option}
                  </button>
                ) : (
                  <button className={"btn btn-option"}>{"WR " + option}</button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export { QuestionWithSolution };
