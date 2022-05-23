import "./Question.css";
const Question = ({ question }) => {
  const { questionNumber, options } = question;
  return (
    <div>
      <div class="flex-hz-space-bw full-width">
        <p>Question: {questionNumber}</p>
      </div>
      <div>
        <p class="typo-label">{question.question}</p>
        <div class="option-container">
          {options.map((op) => {
            return <button class="btn btn-option">{op}</button>;
          })}
        </div>
      </div>
    </div>
  );
};
export { Question };
