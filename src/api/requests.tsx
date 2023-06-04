import AuthAxios from "@/api/axios";
import { LoginFrom } from "@/modules/Login";
import { AxiosError } from "axios";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
// import {
//   clearCredentials,
//   setCredentials,
// } from "@/app/features/auth/authSlice";
// import { GetAllClients } from "@/app/features/clients/clientSlice";
// import { store } from "@/app/store";
// import { User, loginData } from "@helpers/types";
// import { AxiosError } from "axios";
// import { toast } from "react-toastify";

export const LoginRequest = async (data: LoginFrom) => {
  try {
    const res = await AuthAxios.post("/login", JSON.stringify(data));

    const token = res.data.token;
    const user = res.data.user;
    const role = res.data.user.isAdmin ? "admin" : "rece";

    localStorage.setItem("token", token);
    localStorage.setItem("userData", JSON.stringify(user));
    localStorage.setItem("role", role);

    if (role === "admin") {
      <Navigate to="/panel" />;
    } else {
      <Navigate to="/dashboard" />;
    }
    toast.success("👋 Wellcome back");

    // return store.dispatch(setCredentials(response.data));
  } catch (error) {
    if (error && error instanceof AxiosError) {
      toast.warn(error.response?.data.message);
      return console.log("error =>", error.response?.data.message);
    }
    toast.warn("Server error. Please try again");
    console.log("error =>", error);
  }
};

export const logout = async () => {
  try {
    await AuthAxios.post(
      "/logout",
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    localStorage.clear();
    toast.success("👋 See you soon");
    // store.dispatch(GetAllClients());
    // return store.dispatch(clearCredentials());
  } catch (error: any) {
    toast.warn("⚠️ server error please try again");
    return console.log(error);
  }
};
