import AuthAxios from "@/api/axios";
import { GetAllActes } from "@/app/features/actes/acteSlice";
import { GetAllDocs } from "@/app/features/docs/docSlice";
import { GetAllUsers } from "@/app/features/users/userSlice";
import { store } from "@/app/store";
import { LoginFrom } from "@/modules/Login";
import { AxiosError } from "axios";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

export const LoginRequest = async (data: LoginFrom) => {
  try {
    const res = await AuthAxios.post("/login", JSON.stringify(data));

    const token = res.data.token;
    const user = res.data.user;
    const role = res.data.user.isAdmin ? "admin" : "rece";

    localStorage.setItem("token", token);
    localStorage.setItem("userData", JSON.stringify(user));
    localStorage.setItem("role", role);

    store.dispatch(GetAllDocs());
    store.dispatch(GetAllActes());
    store.dispatch(GetAllUsers());

    if (role === "admin") {
      <Navigate to="/panel" />;
    } else {
      <Navigate to="/dashboard" />;
    }
    toast.success("👋 Wellcome back");
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
  } catch (error: any) {
    localStorage.clear();
    toast.warn("⚠️ server error please try again");
    return console.log(error);
  }
};
