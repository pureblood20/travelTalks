import { POST_ACTION_TYPE } from "./post.type";

const initialState = {
  posts: [],
  isloading: false,
  alert: "",
  currentId: "",
};

export const posts = (state = initialState, action) => {
  switch (action.type) {
    case POST_ACTION_TYPE.FETCH_ALL_START:
      return { ...state, isloading: true };
    case POST_ACTION_TYPE.FETCH_ALL_SUCCESS:
      return {
        ...state,
        isloading: false,
        posts: action.payload,
        alert: "success",
      };
    case POST_ACTION_TYPE.FETCH_ALL_ERROR:
      return { ...state, alert: action.payload };
    case POST_ACTION_TYPE.CREATE:
      return { ...state, posts: [...state.posts, action.payload] };
    case POST_ACTION_TYPE.UPDATE_POST:
    case POST_ACTION_TYPE.LIKE_COUNT:
      return {
        ...state,
        posts: [
          ...state.posts.map((post) =>
            post._id === action.payload._id ? action.payload : post
          ),
        ],
      };
    case POST_ACTION_TYPE.DELETE_POST:
      return {
        ...state,
        posts: [...state.posts.filter((post) => post._id !== action.payload)],
      };
    case POST_ACTION_TYPE.FETCH_ONE_POST:
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
};
