import "./Header.css";
import { AiOutlineCodepenCircle } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
const Header = () => {
  return (
    <header class="headerr">
      <div class="header-sub-container">
        <AiOutlineCodepenCircle size={70} />
        <p class="typo-label p-1">QuizTime</p>
      </div>

      <div class="header-sub-container">
        <button class="btn btn-primary btn-icon">
          <BiUserCircle size={40} />
        </button>
      </div>
    </header>
  );
};

export { Header };
