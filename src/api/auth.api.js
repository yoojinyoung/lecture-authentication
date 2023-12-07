import axios from "axios";

const instance = axios.create({
  baseURL: "https://moneyfulpublicpolicy.co.kr",
});

const authAPI = {
  logIn: async ({ id, pw }) => {
    return await instance.post("/login", { id, password: pw });
  },
};

export default authAPI;
