import { QuizCard } from "../../components";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <div class="hero-section">
        <div class="hero-text">
          <p class="btn-hide">Love binge watching?</p>
          <p>Test your knowledge by taking quizes on famous tv shows.</p>
          <p class="typo-subtext pv-1 btn-hide">
            Explore quizes from different categories. Solve quizes and compete
            with your friends✍️ 📘✔️
          </p>
        </div>
        <div class="hero-card-container">
          <div class="hero-card">
            <div class="grid grid-30-70">
              <div class="hero-card-item">
                <button class="btn btn-primary">10+</button>
              </div>
              <div class="hero-card-item">
                <p className="typo-subtext">More than 10 category</p>
              </div>
            </div>
          </div>
          <div class="hero-card">
            <div class="grid grid-30-70">
              <div class="hero-card-item">
                <button class="btn btn-primary">100+</button>
              </div>
              <div class="hero-card-item">
                <p className="typo-subtext">Questions to practise</p>
              </div>
            </div>
          </div>
          <div class="hero-card">
            <div class="grid grid-30-70">
              <div class="hero-card-item">
                <button class="btn btn-primary">100+</button>
              </div>
              <div class="hero-card-item">
                <p className="typo-subtext">Compete with 100+ User</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="top-category flex-vt-center">
        <div class="flex-vt-center category-heading typo-label">
          <p class="h1">Quiz Category</p>
          <p>
            Select your favourite category from different categories available.
          </p>
        </div>
        <div class="grid grid-4-responsive">
          <QuizCard />
          <QuizCard />
          <QuizCard />
          <QuizCard />
        </div>
      </div>
    </div>
  );
};
export { Home };
