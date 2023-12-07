import axios from "axios";

const instance = axios.create({
  baseURL: "https://moneyfulpublicpolicy.co.kr",
});

const authAPI = {
  setToken: (accessToken) => {
    instance.defaults.headers.common.Authorization = accessToken
      ? `Bearer ${accessToken}`
      : undefined;
  },
  logIn: async ({ id, pw }) => {
    return await instance.post("/login", { id, password: pw });
  },
  signUp: async ({ id, pw, nickname }) => {
    return await instance.post("/register", { id, password: pw, nickname });
  },
  getProfile: async () => {
    return await instance.get("/user");
  },
};

export default authAPI;
