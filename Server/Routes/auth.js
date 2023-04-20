import Express from "express";
const router = Express.Router();
import { signIn, signUp } from "../Controllers/auth.js";

router.post("/signin", signIn);
router.post("/signup", signUp);
export default router;
