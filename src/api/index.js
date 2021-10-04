import axios from "axios";

const API = axios.create({ baseURL: "https://hobbies-project.herokuapp.com" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

//auth end points
export const signIn = (FormData) => API.post("/auth/login", FormData);
export const signUp = (FormData) => API.post("/auth/register", FormData);
