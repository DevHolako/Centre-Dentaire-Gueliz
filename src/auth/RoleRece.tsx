import { Navigate, Outlet } from "react-router-dom";
import { useRole } from "./utils";

function RoleRece() {
  const role = useRole();
  if (!role) return <Navigate to={"/"} replace={true} key={role} />;
  if (role !== "rece") return <Navigate to={"/"} replace={true} key={role} />;
  return <Outlet key={role} />;
}

export default RoleRece;
