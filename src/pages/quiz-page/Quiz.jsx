import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GetApi } from "../../apicalls/GetApi";
import { setQuiz } from "../../redux/quizSlice";
import "./Quiz.css";
const Quiz = () => {
  const dispatch = useDispatch();
  const { quiz } = useSelector((state) => state.quizSlice);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getQuizData = async () => {
      const { data, success } = await GetApi("/api/quiz/1");

      if (success) {
        dispatch(setQuiz({ quiz: data.quiz }));
        setLoading(false);
        // console.log(temp);
      } else {
        alert("Something went wrong,check console");
      }
    };
    getQuizData();
  }, [dispatch]);
  return (
    <div className="quiz-page">
      {loading ? (
        <h1>loading</h1>
      ) : (
        <div className="quiz-container flex-vt-center">
          <div className="category-heading typo-label">
            <p className="h1">{quiz.name}</p>
            <p>
              "We are only as strong as we are united, as weak as we are
              divided"- Albus Dumbledore
            </p>
          </div>
          <div className="quiz-intro">
            <div className="quiz-img">
              <img
                className="img-responsive"
                src="https://vistapointe.net/images/harry-potter-and-the-halfblood-prince-1.jpg"
                alt="harry-potter-movie"
              />
            </div>
            <div className="quiz-details typo-label">
              <div className="flex-hz-space-bw">
                <p>Date :</p>
                <p>12/02/2022</p>
              </div>
              <div className="flex-hz-space-bw">
                <p>Time Limit :</p>
                <p>30 Minutes</p>
              </div>
              <div className="flex-hz-space-bw">
                <p>Attempts:</p>
                <p>3 allowed</p>
              </div>
              <div className="flex-hz-space-bw">
                <p>No of Questions :</p>
                <p>10</p>
              </div>
              <div className="flex-hz-space-bw">
                <p>Points :</p>
                <p>100 Points</p>
              </div>
            </div>
          </div>
          <div className="category-heading typo-label">
            <p className="h3">Instructions</p>
            <ul className="list">
              <li className="list-item typo-subtext">
                Each right answer score 10 points.
              </li>
              <li className="list-item typo-subtext">
                Each multiple choice question has only one correct answer.
              </li>
              <li className="list-item typo-subtext">
                To win the quiz you need to score more than 70%.
              </li>
              <li className="list-item typo-subtext">
                There is no negative marking
              </li>
            </ul>
          </div>
          <div className="flex-hz-center full-width">
            <Link to="/quiz/questions" className="link-no-style">
              <button className="btn btn-primary">Start Quiz</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export { Quiz };
