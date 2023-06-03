import { Navigate, Outlet } from "react-router-dom";
import { isLogin } from "./utils";

function RequireLogin() {
  console.log(isLogin());
  return isLogin() ? <Outlet /> : <Navigate to="/" />;
}

export default RequireLogin;
