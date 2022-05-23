import "./Question.css";
const Question = ({ question }) => {
  const { questionNumber, options } = question;
  return (
    <div>
      <div className="flex-hz-space-bw full-width">
        <p>Question: {questionNumber}</p>
      </div>
      <div>
        <p className="typo-label">{question.question}</p>
        <div className="option-container">
          {options.map((op) => {
            return <button className="btn btn-option">{op}</button>;
          })}
        </div>
      </div>
    </div>
  );
};
export { Question };
