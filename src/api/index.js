import axios from 'axios';

// const API = axios.create({ baseURL: "https://postpred.herokuapp.com" });
const API = axios.create({
  baseURL: 'https://app-postpred-api-express.onrender.com/',
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});

// Auth endpoints
export const signIn = (FormData) => API.post('/auth/login', FormData);
export const signUp = (FormData) => API.post('/auth/register', FormData);
export const editUser = (id, formData) => API.patch(`/auth/editUser/${id}`, formData);
export const deleteUser = (id) => API.delete(`/auth/deleteUser/${id}`);
export const resetPassword = (id, formData) => API.patch(`/auth/resetPassword/${id}`, formData);

// Hobby endpoints
export const fetchPosts = () => API.get('/posts');
export const fetchPost = (id) => API.get(`/posts/${id}`);
export const createPost = (newPost) => API.post('/posts', newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);

// Contact us endpoint
export const contactUs = (contactForm) => API.post('/contact', contactForm);

// Comment endpoints
export const createComment = (postId, commentData) => API.post(`/comment/${postId}/comments`, commentData);
export const updateComment = (postId, commentId, updatedCommentData) => API.patch(`/comment/${postId}/comments/${commentId}`, updatedCommentData);
export const deleteComment = (postId, commentId) => API.delete(`/comment/${postId}/comments/${commentId}`);
export const likeComment = (postId, commentId) => API.post(`/comment/${postId}/comments/${commentId}/like`);
export const dislikeComment = (postId, commentId) => API.post(`/comment/${postId}/comments/${commentId}/dislike`);
