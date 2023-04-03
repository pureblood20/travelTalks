import { combineReducers } from "redux";
import { posts } from "./posts/post.reducer";
import { auth } from "./auth/auth.reducer";

export const rootReducer = combineReducers({
  posts: posts,
  auth: auth,
});
