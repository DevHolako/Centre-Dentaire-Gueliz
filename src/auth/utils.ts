import { ProfileFrom } from "@/modules/Profile";

export const isLogin = () => {
  const info = localStorage.getItem("userData");
  if (!info) return false;
  return true;
};

export const useRole = () => {
  const role = localStorage.getItem("role");
  if (!role) return null;
  return role;
};

export const userData = (): ProfileFrom | null => {
  const userDataString = localStorage.getItem("userData");
  if (userDataString !== null) {
    const user = JSON.parse(userDataString) as ProfileFrom;
    return user;
  }
  return null;
};
