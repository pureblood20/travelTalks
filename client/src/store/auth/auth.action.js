import * as api from "../../api/index";
import { AUTH_ACTION_TYPE } from "./auth.type";

export const signin = (user, navigate) => async (dispatch) => {
  try {
    const {
      data: { result, token },
    } = await api.signIn(user);

    const action = {
      type: AUTH_ACTION_TYPE.GOOGLE_SIGN_IN,
      payload: { token, result },
    };
    dispatch(action);
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (user, navigate) => async (dispatch) => {
  try {
    const {
      data: { result, token },
    } = await api.signUp(user);
    const action = {
      type: AUTH_ACTION_TYPE.GOOGLE_SIGN_IN,
      payload: { token, result },
    };
    dispatch(action);
    navigate("/");
  } catch (error) {}
};

export const myprofile = (id) => async (dispatch) => {
  try {
    const { data } = api.myprofile(id);
    dispatch({ type: AUTH_ACTION_TYPE.MY_PROFILE, payload: data });
  } catch (error) {}
};
