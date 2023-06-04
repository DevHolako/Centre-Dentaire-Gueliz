import Admin from "@/pages/admin";
import Docs from "@/pages/admin/docs";
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
      path: "docs",
      element: <Docs />,
    },
    {
      path: "setting",
      element: <Settings />,
    },
  ],
};
