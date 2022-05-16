import "./QuizCard.css";
const QuizCard = () => {
  return (
    <div className="category-card">
      <img
        className="img-responsive"
        src="https://wallpaperaccess.com/full/53000.jpg"
        alt="cat"
      />
      <div className="category-card-text">
        <h2 className="card-heading txt-white">Thriller</h2>
        <h3 className="card-subheading txt-white">2 Quizes</h3>
      </div>
    </div>
  );
};
export { QuizCard };
