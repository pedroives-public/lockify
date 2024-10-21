import express from "express";

import { signup } from "../controllers/auth.controller.signup.js";
import { verifyEmail } from "../controllers/auth.controller.verifyEmail.js";

const router = express.Router();

router.post("/signin");
router.post("/signout");
router.post("/signup", signup);

router.post("/verify-email", verifyEmail);

export default router;
