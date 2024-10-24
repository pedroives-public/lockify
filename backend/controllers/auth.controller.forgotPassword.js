import { User } from "../models/user.model.js";
import { generateResetPasswordToken } from "../utils/generateResetPasswordToken.js";
import { sendResetPasswordEmail } from "../mailtrap/utils/sendResetPasswordEmail.js";

export const forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Generate reset token
    const resetPasswordToken = generateResetPasswordToken();
    const resetPasswordTokenExpiresAt = Date.now() + 1 * 60 * 60 * 1000;

    // Save reset token to user
    user.resetPasswordToken = resetPasswordToken;
    user.resetPasswordTokenExpiresAt = resetPasswordTokenExpiresAt;
    await user.save();

    // Send reset password email
    const resetPasswordUrl = `${req.protocol}://${req.get(
      "host"
    )}/reset-password/${resetPasswordToken}`;
    await sendResetPasswordEmail(user.email, user.name, resetPasswordUrl);

    res.status(200).json({ message: "Password reset link sent to email" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
