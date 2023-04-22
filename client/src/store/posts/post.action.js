import * as api from "../../api/index";
import { POST_ACTION_TYPE } from "./post.type";

export const getAllPosts = () => async (dispatch) => {
  try {
    dispatch({ type: POST_ACTION_TYPE.FETCH_ALL_START });

    const { data } = await api.fetchPosts();
    dispatch({ type: POST_ACTION_TYPE.FETCH_ALL_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: POST_ACTION_TYPE.FETCH_ALL_ERROR, payload: "error" });
  }
};

export const createNewPost = (newPost) => async (dispatch) => {
  try {
    const { data } = await api.createPost(newPost);
    const action = { type: POST_ACTION_TYPE.CREATE, payload: data };
    dispatch(action);
  } catch (error) {}
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.editPost(id, post);
    dispatch({ type: POST_ACTION_TYPE.UPDATE_POST, payload: data });
  } catch (error) {}
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: POST_ACTION_TYPE.DELETE_POST, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const likeCount = (id) => async (dispatch) => {
  try {
    const { data } = await api.likeCount(id);
    dispatch({ type: POST_ACTION_TYPE.LIKE_COUNT, payload: data });
  } catch {}
};

export const getOnePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.getOnePost(id);
    dispatch({ type: POST_ACTION_TYPE.FETCH_ONE_POST, payload: data });
  } catch (error) {}
};
