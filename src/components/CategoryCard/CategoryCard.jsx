import { Link } from "react-router-dom";
import "./CategoryCard.css";
const CategoryCard = ({ category }) => {
  const { id, categoryName, categoryImage, categoryQuizzes } = category;
  return (
    <Link to={`/category/${id}`} className="category-card">
      <img className="img-responsive" src={categoryImage} alt="cat" />
      <div className="category-card-text">
        <h2 className="card-heading txt-white">{categoryName}</h2>
        <h3 className="card-subheading txt-white">
          {categoryQuizzes + " "} Quizes
        </h3>
      </div>
    </Link>
  );
};
export { CategoryCard };
