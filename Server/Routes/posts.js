import Express from "express";
const router = Express.Router();
import {
  getPost,
  createPost,
  editPost,
  deletePost,
  likePost,
  getOnePost,
} from "../Controllers/posts.js";
import { auth } from "../Middleware/auth.js";

router.route("/").get(getPost).post(auth, createPost);
router
  .route("/:id")
  .patch(auth, editPost)
  .delete(auth, deletePost)
  .get(auth, getOnePost);
router.route("/:id/likepost").patch(auth, likePost);
export default router;
