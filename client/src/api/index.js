import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8080/api/v1" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${JSON.parse(
      localStorage.getItem("token")
    )}`;
    console.log("vvsvs");
  }
  return req;
});

// const url = "http://localhost:8080/api/v1/posts";
export const fetchPosts = () => API.get(`/posts`);
export const createPost = (newPost) => API.post(`/posts`, newPost);
export const editPost = (id, editedPost) =>
  API.patch(`/posts/${id}`, editedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likeCount = (id) => API.patch(`/posts/${id}/likepost`);
export const getOnePost = (id) => API.get(`/posts/${id}`);

// const url2 = "http://localhost:8080/api/v1/auth";
export const signIn = (user) => API.post(`/auth/signin`, user);
export const signUp = (user) => API.post(`/auth/signup`, user);
