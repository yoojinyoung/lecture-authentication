import axios from "axios";
import authAPI from "./auth.api";

const instance = axios.create({
  baseURL: "http://localhost:4000",
});

const dataAPI = {
  getPosts: async () => {
    return await instance.get("/posts");
  },
};

instance.interceptors.request.use(
  async (config) => {
    const abortController = new AbortController();
    const response = await authAPI.getProfile();

    if (response.status !== 200) {
      abortController.abort("Unauthenticated");
    }

    return { ...config, signal: abortController.signal };
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default dataAPI;
