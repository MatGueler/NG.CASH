import axios from "axios";

const instance = axios.create({
  baseURL: "http://ec2-18-234-144-60.compute-1.amazonaws.com",
});

export default instance;
