import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { GetApi } from "../../apicalls/GetApi";
import { resetAnswer, setQuiz } from "../../redux/quizSlice";
import "./Quiz.css";
const Quiz = () => {
  const dispatch = useDispatch();
  const { quiz } = useSelector((state) => state.quizSlice);
  const { quizId } = useParams();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getQuizData = async () => {
      const { data, success } = await GetApi(`/api/quiz/${quizId}`);
      if (success) {
        dispatch(setQuiz({ quiz: data.quiz }));
        setLoading(false);
        dispatch(resetAnswer());
      } else {
        alert("Something went wrong,check console");
      }
    };
    getQuizData();
  }, [dispatch, quizId]);
  return (
    <div className="quiz-page">
      {loading ? (
        <h1>loading</h1>
      ) : (
        <div className="quiz-container flex-vt-center">
          <div className="category-heading typo-label">
            <p className="h1">{quiz.quizName}</p>
            <p>{quiz.quizDescription}</p>
          </div>
          <div className="quiz-intro">
            <div className="quiz-img">
              <img
                className="img-responsive"
                src={quiz.quizImage}
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
                <p>{quiz.questions.length}</p>
              </div>
              <div className="flex-hz-space-bw">
                <p>Points :</p>
                <p>
                  {quiz.questions.length * quiz.instruction.pointsPerQuestion}{" "}
                  Points
                </p>
              </div>
            </div>
          </div>
          <div className="category-heading typo-label">
            <p className="h3">Instructions</p>
            <ul className="list">
              <li className="list-item typo-subtext">
                Each right answer score{" "}
                {" " + quiz.instruction.pointsPerQuestion + " "}
                points.
              </li>
              <li className="list-item typo-subtext">
                Each multiple choice question has only one correct answer.
              </li>
              <li className="list-item typo-subtext">
                To win the quiz you need to score more than $
                {quiz.instruction.passingScore}%.
              </li>
              <li className="list-item typo-subtext">
                {quiz.instruction.negativeMarking
                  ? "There is negative marking"
                  : "There is no negative marking"}
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
