import { AUTH_ACTION_TYPE } from "./auth.type";

const userAuth = localStorage.getItem("profile");
const initialState = {
  auth: userAuth ? JSON.parse(userAuth) : {},
  isloading: false,
  alert: "",
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_ACTION_TYPE.GOOGLE_SIGN_IN:
      //localStorage.setItem("profile", JSON.stringify({ ...action.data }));
      return { ...state, auth: action.data };
    case AUTH_ACTION_TYPE.GOOGLE_SIGN_OUT:
      localStorage.clear();
      return { ...state, auth: null };
    default:
      return state;
  }
};
