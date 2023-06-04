import axios from "axios";

const token = localStorage.getItem("token");
const AuthAxios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "aplication/json",
    Authorization: `Bearer ${token}`,
  },
});

export default AuthAxios;
