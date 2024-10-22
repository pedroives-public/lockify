import bcryptjs from "bcryptjs";

import { User } from "../models/user.model.js";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";

export const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      throw new Error("All fields are required");
    }

    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("Invalid credentials");
    }

    const isPasswordCorrect = await bcryptjs.compare(password, user.password);
    if (!isPasswordCorrect) {
      throw new Error("Invalid credentials");
    }

    // jwt verification
    generateTokenAndSetCookie(res, user._id);

    user.lastLogin = Date.now();
    await user.save();

    res.status(200).json({
      success: true,
      message: "User signed in successfully",
      user: {
        name: user.name,
        email: user.email,
        password: undefined,
        lastLogin: user.lastLogin,
        createdAt: user.createdAt,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
