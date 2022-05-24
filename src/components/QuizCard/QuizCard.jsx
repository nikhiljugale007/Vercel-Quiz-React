import { Link } from "react-router-dom";
import "./QuizCard.css";
const QuizCard = ({ quiz }) => {
  const { _id, quizName, quizImage, quizQuestions } = quiz;
  return (
    <Link to={`/quiz/${_id}`} className="quiz-card">
      <img className="img-responsive" src={quizImage} alt="the-100-movie" />
      <div className="quiz-card-text">
        <h2 className="card-heading txt-white">{quizName}</h2>
        <h3 className="card-subheading txt-white">
          {quizQuestions + " Questions"}{" "}
        </h3>
      </div>
      <div className="typo-title show-on-hover">
        <span>Take Quiz</span>
      </div>
    </Link>
  );
};
export { QuizCard };
