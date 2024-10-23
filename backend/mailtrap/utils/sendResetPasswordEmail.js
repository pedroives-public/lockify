import { RESET_PASSWORD_EMAIL_TEMPLATE } from "../templates.js";
import { mailtrapClient, sender } from "../mailtrap.config.js";

export const sendResetPasswordEmail = async (email, name, resetLink) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Reset Your Password - Lockify",
      html: RESET_PASSWORD_EMAIL_TEMPLATE.replace(
        "{resetLink}",
        resetLink
      ).replace("{name}", name),
      category: "Reset Password Email",
    });

    console.log("(Reset Password) -> Email sent successfully: ", response);
  } catch (error) {
    throw new Error(`Error sending reset password email: ${error}`);
  }
};
