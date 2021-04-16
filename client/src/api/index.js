import axios from "axios";

const url = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(url);

export const createPost = (newpost) => axios.post(url, newpost)

export const updatePost = (id, updatePost) => axios.patch(`${url}/${id}`, updatePost);

export const deletePost = (id) => axios.delete(`${url}/${id}`);

export const likeCounter = (id) => axios.patch(`${url}/${id}/likecount`);
