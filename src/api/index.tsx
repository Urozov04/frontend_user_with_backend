import axios from "axios";

export const api = axios.create({
  baseURL: "https://userbackend-production-0571.up.railway.app/",
});