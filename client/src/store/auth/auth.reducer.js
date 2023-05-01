import { AUTH_ACTION_TYPE } from "./auth.type";

const userAuth = localStorage.getItem("profile");
const token = localStorage.getItem("token");
const initialState = {
  auth: userAuth ? JSON.parse(userAuth) : {},
  token: token ? JSON.parse(token) : {},
  isloading: false,
  alert: "",
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_ACTION_TYPE.GOOGLE_SIGN_IN:
      localStorage.setItem("profile", JSON.stringify(action.payload.result));
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      return {
        ...state,
        auth: action.payload.result,
        token: action.payload.token,
      };
    case AUTH_ACTION_TYPE.GOOGLE_SIGN_OUT:
      localStorage.clear();
      return { ...state, auth: null, token: null };
    // case AUTH_ACTION_TYPE.SIGN_IN:
    // case AUTH_ACTION_TYPE.SIGN_UP:
    //   return { ...state, auth: [...state.auth, action.payload] };
    case AUTH_ACTION_TYPE.MY_PROFILE:
      return { ...state };
    default:
      return state;
  }
};
