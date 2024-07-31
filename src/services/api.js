import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:7104/",
});

export default api;