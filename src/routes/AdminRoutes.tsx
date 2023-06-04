import Admin from "@/pages/admin";
import Users from "@/pages/admin/users";
import Layout from "@/pages/layouts/Layout";
import Settings from "@/pages/receptionist/Profile";
import { RouteObject } from "react-router-dom";

export const AdminRoutes: RouteObject = {
  element: <Layout />,
  children: [
    {
      index: true,
      element: <Admin />,
    },
    {
      path: "users",
      element: <Users />,
    },
    {
      path: "setting",
      element: <Settings />,
    },
  ],
};
