
import axios from "axios";

// Instância
const api = axios.create({
  baseURL: "http://localhost:3000",
});

export default api;