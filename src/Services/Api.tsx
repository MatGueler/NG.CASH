import axios from "axios";

const instance = axios.create({
  baseURL: "hec2-18-234-144-60.compute-1.amazonaws.com",
});

export default instance;
