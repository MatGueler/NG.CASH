import axios from "axios";

const instance = axios.create({
  baseURL: "https://ng-cash-back.onrender.com",
});

export default instance;
