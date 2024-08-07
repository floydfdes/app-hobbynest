import * as api from "../api/index.js";

import {
  CREATE,
  DELETE,
  FETCH_ALL,
  FETCH_ONE,
  LIKE,
  UPDATE
} from "../constants/actionTypes";
import { notifyCreate, notifyDelete, notifyUpdate } from "./toastNotifications";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getPost = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchPost(id);

    dispatch({ type: FETCH_ONE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post, history) => async (dispatch) => {
  try {
    post["creatorName"] = JSON.parse(
      localStorage.getItem("profile")
    ).result.firstName;
    const { data } = await api.createPost(post);

    dispatch({ type: CREATE, payload: data });
    dispatch(
      notifyCreate({ message: "Post created successfully", color: "success" })
    );
    history("/hobbies");
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post, history) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
    dispatch(
      notifyUpdate({ message: "Post updated successfully", color: "success" })
    );
    history("/hobbies");
  } catch (error) {
    console.log(error.message);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await await api.deletePost(id);
    dispatch({ type: DELETE, payload: id });
    dispatch(notifyDelete({ message: "Post deleted", color: "error" }));
  } catch (error) {
    console.log(error.message);
  }
};
