import express from "express";

import { signin } from "../controllers/auth.controller.signin.js";
import { signout } from "../controllers/auth.controller.signout.js";
import { signup } from "../controllers/auth.controller.signup.js";
import { verifyEmail } from "../controllers/auth.controller.verifyEmail.js";

const router = express.Router();

router.post("/signin", signin);
router.post("/signout", signout);
router.post("/signup", signup);

router.post("/verify-email", verifyEmail);

export default router;
