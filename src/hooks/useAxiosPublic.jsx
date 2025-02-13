import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://bistro-boss-server-henna-seven.vercel.app",
});

const useAxiosPublic = () => {
  return axiosSecure;
};

export default useAxiosPublic;
