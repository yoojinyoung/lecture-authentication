import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000",
});

const dataAPI = {
  getPosts: async () => {
    return await instance.get("/posts");
  },
};

export default dataAPI;
