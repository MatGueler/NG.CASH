import { useNavigate } from "react-router-dom";

export default function useToken() {
  let navigate = useNavigate();
  const token = localStorage.getItem("token");
  if (!token) {
    navigate("/");
  }
  return token;
}
