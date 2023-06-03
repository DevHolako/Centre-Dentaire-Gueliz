import { Navigate, Outlet } from "react-router-dom";
import { useRole } from "./utils";

function RoleAdmin() {
  const role = useRole();
  if (!role) return <Navigate to={"/"} replace={true} />;
  if (role !== "admin") return <Navigate to={"/"} replace={true} />;
  return <Outlet />;
}

export default RoleAdmin;
