import { Link } from "react-router-dom";
import "./CategoryCard.css";
const CategoryCard = () => {
  return (
    <Link to="/category/123" className="category-card">
      <img
        className="img-responsive"
        src="https://wallpaperaccess.com/full/53000.jpg"
        alt="cat"
      />
      <div className="category-card-text">
        <h2 className="card-heading txt-white">Thriller</h2>
        <h3 className="card-subheading txt-white">2 Quizes</h3>
      </div>
    </Link>
  );
};
export { CategoryCard };
