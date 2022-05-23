import { Link } from "react-router-dom";
import "./QuizCard.css";
const QuizCard = () => {
  return (
    <Link to="/quiz/123" className="quiz-card">
      <img
        className="img-responsive"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREbojc56EugBN42yFy7MNEILo4bwnEjmqUBnrFz7QOooffyI_EtkhOmB7laY7cX8jp6UA&usqp=CAU"
        alt="the-100-movie"
      />
      <div className="quiz-card-text">
        <h2 className="card-heading txt-white">The 100</h2>
        <h3 className="card-subheading txt-white">10 Questions</h3>
      </div>
      <div className="typo-title show-on-hover">
        <span>Take Quiz</span>
      </div>
    </Link>
  );
};
export { QuizCard };
