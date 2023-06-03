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
