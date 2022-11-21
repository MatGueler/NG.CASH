import axios from "axios";
import dotenv from "dotenv";

const instance = axios.create({
  baseURL: "http://localhost:5000",
});

export default instance;
