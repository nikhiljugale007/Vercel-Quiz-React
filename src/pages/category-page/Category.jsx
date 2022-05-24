import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetApi } from "../../apicalls/GetApi";
import { QuizCard } from "../../components";
import "./Category.css";
const Category = () => {
  const { category_id } = useParams();
  const [currentCategory, setCurrentCategory] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getCategoryData = async () => {
      const { data, success } = await GetApi(
        `/api/category/${category_id}`,
        false
      );
      if (success) {
        setCurrentCategory(() => data.category);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } else {
        alert("Something went wrong");
      }
    };
    setLoading(true);
    getCategoryData();
  }, [category_id]);
  const { categoryName, categoryDescription, quizzes } = currentCategory;
  return (
    <div className="category-page">
      {loading ? (
        <div className="flex-hz-center">
          <h1>Loading Please wait</h1>
        </div>
      ) : (
        <div className="top-category flex-vt">
          <div className="category-heading typo-label">
            <p className="h1">{categoryName}</p>
            <p>{categoryDescription}</p>
          </div>
          <div className="grid grid-4-responsive">
            {quizzes.map((quiz) => {
              return <QuizCard quiz={quiz} key={quiz._id} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export { Category };
