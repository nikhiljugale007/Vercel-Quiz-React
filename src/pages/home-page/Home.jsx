import { QuizCard } from "../../components";
import "./Home.css";
const Home = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="hero-text">
          <p className="btn-hide">Love binge watching?</p>
          <p>Test your knowledge by taking quizes on famous tv shows.</p>
          <p className="typo-subtext pv-1 btn-hide">
            Explore quizes from different categories. Solve quizes and compete
            with your friends✍️ 📘✔️
          </p>
        </div>
        <div className="hero-card-container">
          <div className="hero-card">
            <div className="grid grid-30-70">
              <div className="hero-card-item">
                <button className="btn btn-primary">10+</button>
              </div>
              <div className="hero-card-item">
                <p className="typo-subtext">More than 10 category</p>
              </div>
            </div>
          </div>
          <div className="hero-card">
            <div className="grid grid-30-70">
              <div className="hero-card-item">
                <button className="btn btn-primary">100+</button>
              </div>
              <div className="hero-card-item">
                <p className="typo-subtext">Questions to practise</p>
              </div>
            </div>
          </div>
          <div className="hero-card">
            <div className="grid grid-30-70">
              <div className="hero-card-item">
                <button className="btn btn-primary">100+</button>
              </div>
              <div className="hero-card-item">
                <p className="typo-subtext">Compete with 200+ User</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="top-category flex-vt-center">
        <div className="flex-vt-center category-heading typo-label">
          <p className="h1">Quiz Categories</p>
          <p>
            Select your favourite category from different categories available.
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
        </div>
      </div>
    </div>
  );
};
export { Home };
