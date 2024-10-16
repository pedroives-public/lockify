import express from "express";

import { signup } from "../controllers/auth.controller.signup.js";

const router = express.Router();

router.post("/signin");
router.post("/signout");
router.post("/signup", signup);

export default router;
