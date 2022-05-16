import "./Header.css";
import { AiOutlineCodepenCircle } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="headerr">
      <div className="header-sub-container">
        <Link to="/" className="link-no-style flex-hz text-primary">
          <AiOutlineCodepenCircle size={70} />
          <p className="typo-label p-1 ">VercelQuiz</p>
        </Link>
      </div>

      <div className="header-sub-container">
        <button className="btn btn-primary btn-icon">
          <BiUserCircle size={40} />
        </button>
      </div>
    </header>
  );
};

export { Header };
