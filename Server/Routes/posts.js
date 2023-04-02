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

router.route("/").get(getPost).post(createPost);
router.route("/:id").patch(editPost).delete(deletePost).get(getOnePost);
router.route("/:id/likepost").patch(likePost);
export default router;
