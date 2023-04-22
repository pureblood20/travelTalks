import Express from "express";
const router = Express.Router();
import { signIn, signUp, getMyProfile } from "../Controllers/auth.js";

router.post("/signin", signIn);
router.post("/signup", signUp);
router.get("/:id", getMyProfile);
export default router;
