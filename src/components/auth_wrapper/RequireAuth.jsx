import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const RequireAuth = ({ children, from }) => {
  const { isLoggedIn } = useSelector((store) => store.authSlice);
  console.log(isLoggedIn);
  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ from: from }} />
  );
};
export { RequireAuth };
