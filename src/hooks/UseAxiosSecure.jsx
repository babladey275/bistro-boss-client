import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
});

const UseAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();

  // request interceptor to add authorization header for every secure call to the api
  axiosInstance.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  //intercepts 401 and 403 status
  axiosInstance.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      const status = error.response.status;
      console.log("status error in the interceptor", status);

      if (status === 401 || status === 403) {
        await logOut();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default UseAxiosSecure;
