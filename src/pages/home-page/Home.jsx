import { useEffect, useState } from "react";
import { CategoryCard } from "../../components";
import { GetApi } from "../../apicalls/GetApi";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { setCategories } from "../../redux/categorySlice";
const Home = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((store) => store.categorySlice);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const { data, success } = await GetApi("/api/categories/");
      if (success) {
        dispatch(setCategories({ categories: data.categories }));
        setLoading(false);
      } else {
        alert("Something went wrong");
      }
    };
    setLoading(true);
    fetchData();
  }, [dispatch]);
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
                <p className="typo-subtext p-1">More than 10 category</p>
              </div>
            </div>
          </div>
          <div className="hero-card">
            <div className="grid grid-30-70">
              <div className="hero-card-item">
                <button className="btn btn-primary">100+</button>
              </div>
              <div className="hero-card-item">
                <p className="typo-subtext p-1">Questions to practise</p>
              </div>
            </div>
          </div>
          <div className="hero-card">
            <div className="grid grid-30-70">
              <div className="hero-card-item">
                <button className="btn btn-primary">100+</button>
              </div>
              <div className="hero-card-item">
                <p className="typo-subtext p-1">Compete with 200+ User</p>
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
          {loading ? (
            <h1>Loading</h1>
          ) : (
            categories.map((category) => {
              return <CategoryCard key={category.id} category={category} />;
            })
          )}
        </div>
      </div>
    </div>
  );
};
export { Home };
