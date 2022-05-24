import { useDispatch, useSelector } from "react-redux";
import { setAnswer } from "../../redux/quizSlice";
import "./Question.css";
const Question = ({ question }) => {
  const dispatch = useDispatch();
  const { questionNumber, options } = question;
  const { answers } = useSelector((store) => store.quizSlice);

  const setAnswerOption = (index) => {
    dispatch(setAnswer({ questionNo: questionNumber, option: index + 1 }));
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
              <button
                className={
                  "btn btn-option " +
                  (answers[questionNumber - 1] === index + 1
                    ? "btn-selected"
                    : "")
                }
                key={index}
                onClick={() => setAnswerOption(index)}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export { Question };
