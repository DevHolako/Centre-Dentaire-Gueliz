import Layout from "@/pages/layouts/Layout";
import Receptionistdashboard from "@/pages/receptionist";
import DocPatientsList from "@/pages/receptionist/DocPatientsList"; // GetPatientByDoc,
import Patients from "@/pages/receptionist/Patients";
import Settings from "@/pages/receptionist/Profile";
import { RouteObject } from "react-router-dom";

export const ReceRoutes: RouteObject = {
  element: <Layout />,
  children: [
    {
      index: true,
      element: <Receptionistdashboard />,
    },
    {
      path: "patients",
      element: <Patients />,
    },
    {
      path: "setting",
      element: <Settings />,
    },
    {
      path: "doc/:id",
      element: <DocPatientsList />,
      // loader: GetPatientByDoc,
    },
  ],
};
