import axios from "axios";

const API = axios.create({ baseURL: "https://postpred.herokuapp.com" });

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
export const editUser = (id, formData) =>
  API.patch(`/auth/editUser/${id}`, formData);
export const deleteUser = (id, formData) =>
  API.delete(`/auth/deleteUser/${id}`, formData);

//hobby end points
export const fetchPosts = () => API.get("/posts");
export const createPost = (newPost) => API.post("/posts", newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
