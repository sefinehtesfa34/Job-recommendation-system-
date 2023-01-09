import jwt_decode from "jwt-decode";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import dayjs from "dayjs";
import { useContext } from "react";
const baseURL = "http://127.0.0.1:8000/";
const UseAxios = () => {
  const { token, setToken, setUser } = useContext(AuthContext);
  const axiosInstance = axios.create({
    baseURL,
    headers: {
      Authorization: `Bearer ${token?.access}`,
    },
  });
  axiosInstance.interceptors.request.use(async (req) => {
    const user = jwt_decode(token.access);
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
    if (isExpired) return req;
    const response = axios.post(`/api/v1/token/access`, {
      refresh: token.refresh,
    });
    localStorage.setItem("token", JSON.stringify(response.data));
    setToken(response.data);
    setUser(jwt_decode(response.data.access));
    req.headers.Authorization = `Bearer ${response.data.access}`;
    return req;
  });
  return axiosInstance;
};
export default UseAxios 