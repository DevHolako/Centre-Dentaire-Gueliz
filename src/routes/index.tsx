import Login from "@/pages/auth/Login";
import Layout from "@/pages/layouts/Layout";
import ReceptionistDashbord from "@/pages/receptionist";
import DocPatientsList, {
  GetPatientByDoc,
} from "@/pages/receptionist/DocPatientsList";
import Patients from "@/pages/receptionist/Patients";
import Settings from "@/pages/receptionist/Profile";
import { createBrowserRouter } from "react-router-dom";

//**end of imports */
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "dashbord",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ReceptionistDashbord />,
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
        loader: GetPatientByDoc,
      },
    ],
  },
]);
