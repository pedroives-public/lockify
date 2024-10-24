import bcryptjs from "bcryptjs";

import { User } from "../models/user.model.js";
import { sendResetSuccessEmail } from "../mailtrap/utils/sendResetSuccessEmail.js";

export const resetPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  try {
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordTokenExpiresAt: { $gt: Date.now() },
    });

    if (!user) {
      return res
        .status(400)
        .json({ message: "Invalid or expired reset token" });
    }

    // Create a new hashed password
    const hashedPassword = await bcryptjs.hash(password, 12);
    user.password = hashedPassword;

    // Update password and remove reset token
    user.resetPasswordToken = undefined;
    user.resetPasswordTokenExpiresAt = undefined;
    await user.save();

    // Send reset success email
    await sendResetSuccessEmail(user.email, user.name);

    res.status(200).json({ message: "Password reset successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
