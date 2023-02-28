import axios from "axios";

const api = axios.create({
  baseURL:"http://localhost:5500"
  ,
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});
 
 export const searchUser = (data) => api.post('/search',data)