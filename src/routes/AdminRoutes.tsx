import Admin from "@/pages/admin";
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
      path: "setting",
      element: <Settings />,
    },
  ],
};
