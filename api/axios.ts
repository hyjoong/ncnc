import axios from "axios";

export const instance = axios.create({
  baseURL: "https://api2.ncnc.app",
  headers: {
    "Content-Tpye": "application/json",
  },
});
