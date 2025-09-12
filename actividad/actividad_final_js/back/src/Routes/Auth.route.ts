import { Router } from "express";
import { registerUser } from "../Controller/Auth/register";
import { loginUser } from "../Controller/Auth/login";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;
