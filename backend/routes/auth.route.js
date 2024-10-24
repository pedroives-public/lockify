import express from "express";

import { signin } from "../controllers/auth.controller.signin.js";
import { signout } from "../controllers/auth.controller.signout.js";
import { signup } from "../controllers/auth.controller.signup.js";

import { checkAuth } from "../controllers/auth.controller.checkAuth.js";
import { verifyEmail } from "../controllers/auth.controller.verifyEmail.js";
import { forgotPassword } from "../controllers/auth.controller.forgotPassword.js";
import { resetPassword } from "../controllers/auth.controller.resetPassword.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/check-auth", verifyToken, checkAuth);

router.post("/signin", signin);
router.post("/signout", signout);
router.post("/signup", signup);

router.post("/verify-email", verifyEmail);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

export default router;
