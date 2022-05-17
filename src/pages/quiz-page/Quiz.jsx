import { Link } from "react-router-dom";
import "./Quiz.css";
const Quiz = () => {
  return (
    <div className="quiz-page">
      <div class="quiz-container flex-vt-center">
        <div class="category-heading typo-label">
          <p class="h1">Harry Potter</p>
          <p>
            "We are only as strong as we are united, as weak as we are divided"-
            Albus Dumbledore
          </p>
        </div>
        <div class="quiz-intro">
          <div class="quiz-img">
            <img
              class="img-responsive"
              src="https://vistapointe.net/images/harry-potter-and-the-halfblood-prince-1.jpg"
              alt="harry-potter-movie"
            />
          </div>
          <div class="quiz-details typo-label">
            <div class="flex-hz-space-bw">
              <p>Date :</p>
              <p>12/02/2022</p>
            </div>
            <div class="flex-hz-space-bw">
              <p>Time Limit :</p>
              <p>30 Minutes</p>
            </div>
            <div class="flex-hz-space-bw">
              <p>Attempts:</p>
              <p>3 allowed</p>
            </div>
            <div class="flex-hz-space-bw">
              <p>No of Questions :</p>
              <p>10</p>
            </div>
            <div class="flex-hz-space-bw">
              <p>Points :</p>
              <p>100 Points</p>
            </div>
          </div>
        </div>
        <div class="category-heading typo-label">
          <p class="h3">Instructions</p>
          <ul class="list">
            <li class="list-item typo-subtext">
              Each right answer score 10 points.
            </li>
            <li class="list-item typo-subtext">
              Each multiple choice question has only one correct answer.
            </li>
            <li class="list-item typo-subtext">
              To win the quiz you need to score more than 70%.
            </li>
            <li class="list-item typo-subtext">There is no negative marking</li>
          </ul>
        </div>
        <div class="flex-hz-center full-width">
          <Link to="/quiz/questions" class="link-no-style">
            <button class="btn btn-primary">Start Quiz</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export { Quiz };
