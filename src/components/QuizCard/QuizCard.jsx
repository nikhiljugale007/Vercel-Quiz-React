import "./QuizCard.css";
const QuizCard = () => {
  return (
    <div class="category-card">
      <img
        class="img-responsive"
        src="https://wallpaperaccess.com/full/53000.jpg"
        alt="cat"
      />
      <div class="category-card-text">
        <h2 class="card-heading txt-white">Thriller</h2>
        <h3 class="card-subheading txt-white">2 Quizes</h3>
      </div>
    </div>
  );
};
export { QuizCard };
