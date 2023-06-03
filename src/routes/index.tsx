import Login from "@/pages/auth/Login";
import { createBrowserRouter } from "react-router-dom";
import RequireLogin from "@/auth/requierLogin";
import Layout from "@/pages/layouts/Layout";
import { ReceRoutes } from "./receRoutes";
import { AdminRoutes } from "./AdminRoutes";
import RoleRece from "@/auth/RoleRece";
import RoleAdmin from "@/auth/RoleAdmin";

/**end of imports */

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/test",
    element: <Layout />,
  },
  {
    element: <RequireLogin />,
    children: [
      {
        path: "dashboard",
        element: <RoleRece />,
        children: [ReceRoutes],
      },
      {
        path: "panel",
        element: <RoleAdmin />,
        children: [AdminRoutes],
      },
    ],
  },
]);
