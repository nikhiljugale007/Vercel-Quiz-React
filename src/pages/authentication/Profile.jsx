import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../redux/authSlice";
import "./Authentication.css";
const Profile = () => {
  const { user } = useSelector((state) => state.authSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch(logoutUser());
    navigate("/");
  };
  return (
    <div className="profile-page">
      <p className="typo-title flex-hz-center p-2">My Profile</p>
      <p className="typo-title flex-hz-center p-2">{user.firstName}</p>
      <div className="flex-hz-center">
        <button className="btn btn-outlined" onClick={logout}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

export { Profile };
