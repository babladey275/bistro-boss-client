import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
});

const UseAxiosSecure = () => {
  return axiosInstance;
};

export default UseAxiosSecure;
