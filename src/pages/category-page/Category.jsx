import { QuizCard } from "../../components";
import "./Category.css";
const Category = () => {
  return (
    <div className="category-page">
      <div class="top-category flex-vt">
        <div class="category-heading typo-label">
          <p class="h1">Fiction Category</p>
          <p>
            Love fiction movies & series. Here are some quizes based on famous
            fiction movies and series. Test your knowledge.
          </p>
        </div>
        <div class="grid grid-4-responsive">
          <QuizCard />
          <QuizCard />
          <QuizCard />
        </div>
      </div>
    </div>
  );
};

export { Category };
