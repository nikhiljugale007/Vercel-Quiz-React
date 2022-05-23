import "./Header.css";
import { AiOutlineCodepenCircle } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const { isLoggedIn } = useSelector((state) => state.authSlice);
  return (
    <header className="headerr">
      <div className="header-sub-container">
        <Link to="/" className="link-no-style flex-hz text-primary">
          <AiOutlineCodepenCircle size={70} />
          <p className="typo-label p-1 ">VercelQuiz</p>
        </Link>
      </div>

      <div className="header-sub-container">
        {isLoggedIn ? (
          <Link to="/profile">
            <button className="btn btn-primary btn-icon">
              <BiUserCircle size={40} />
            </button>
          </Link>
        ) : (
          <Link to="/login" className="link-no-style">
            <button className="btn btn-primary">Login</button>
          </Link>
        )}
      </div>
    </header>
  );
};

export { Header };
