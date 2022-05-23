import { QuizCard } from "../../components";
import "./Category.css";
const Category = () => {
  return (
    <div className="category-page">
      <div className="top-category flex-vt">
        <div className="category-heading typo-label">
          <p className="h1">Fiction Category</p>
          <p>
            Love fiction movies & series. Here are some quizes based on famous
            fiction movies and series. Test your knowledge.
          </p>
        </div>
        <div className="grid grid-4-responsive">
          <QuizCard />
          <QuizCard />
          <QuizCard />
          <QuizCard />
          <QuizCard />
          <QuizCard />
          <QuizCard />
          <QuizCard />
          <QuizCard />
        </div>
      </div>
    </div>
  );
};

export { Category };
