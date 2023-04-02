import axios from "axios";

const url = "http://localhost:8080/api/v1/posts";
export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const editPost = (id, editedPost) =>
  axios.patch(`${url}/${id}`, editedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likeCount = (id) => axios.patch(`${url}/${id}/likepost`);
export const getOnePost = (id) => axios.get(`${url}/${id}`);
