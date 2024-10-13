import express from "express";

const router = express.Router();

router.post("/signin");
router.post("/signout");
router.post("/signup");

export default router;
