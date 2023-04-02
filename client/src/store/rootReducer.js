import { combineReducers } from "redux";
import { posts } from "./posts/post.reducer";

export const rootReducer = combineReducers({
    posts : posts
})