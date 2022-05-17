import "./QuizQuestions.css";
const QuizQuestions = () => {
  return (
    <div className="question-page">
      <div class="category-heading typo-label">
        <p class="h1 flex-hz-center">Harry Potter Quiz</p>
      </div>
      <div class="question-container">
        <div class="flex-hz-space-bw full-width">
          <p>Question: 1/5</p>
        </div>
        <div>
          <p class="typo-label">
            In the Philosopher’s Stone, what was the first password to the
            Gryffindor common room?
          </p>
          <div class="option-container">
            <button class="btn btn-option">Caput Dracoins</button>
            <button class="btn btn-option">Reginald</button>
            <button class="btn btn-option">Michale</button>
            <button class="btn btn-option">Robert</button>
          </div>
        </div>

        <div class="flex-hz-space-bw full-width">
          <button class="btn btn-text">PREV</button>
          <button class="btn btn-text">NEXT</button>
        </div>
      </div>
    </div>
  );
};
export { QuizQuestions };
