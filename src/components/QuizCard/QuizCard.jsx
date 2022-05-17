import { Link } from "react-router-dom";
import "./QuizCard.css";
const QuizCard = () => {
  return (
    <Link to="/category/123" className="quiz-card">
      <img
        class="img-responsive"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREbojc56EugBN42yFy7MNEILo4bwnEjmqUBnrFz7QOooffyI_EtkhOmB7laY7cX8jp6UA&usqp=CAU"
        alt="the-100-movie"
      />
      <div class="quiz-card-text">
        <h2 class="card-heading txt-white">The 100</h2>
        <h3 class="card-subheading txt-white">10 Questions</h3>
      </div>
      <div class="typo-title show-on-hover">
        <span>Take Quiz</span>
      </div>
    </Link>
  );
};
export { QuizCard };
