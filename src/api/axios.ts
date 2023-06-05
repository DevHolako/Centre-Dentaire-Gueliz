import axios from "axios";

const AuthAxios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "aplication/json",
  },
});

// Add a request interceptor
AuthAxios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;

  return config;
});

export default AuthAxios;
