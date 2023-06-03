import { Navigate, Outlet } from "react-router-dom";
import { useRole } from "./utils";

function RoleRece() {
  const role = useRole();
  if (!role) return <Navigate to={"/"} replace={true} />;
  if (role !== "rece") return <Navigate to={"/"} replace={true} />;
  return <Outlet />;
}

export default RoleRece;
