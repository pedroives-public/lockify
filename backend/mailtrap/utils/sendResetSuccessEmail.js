import { RESET_SUCCESS_EMAIL_TEMPLATE } from "../templates.js";
import { mailtrapClient, sender } from "../mailtrap.config.js";

export const sendResetSuccessEmail = async (email, name) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Password Reset Successfully",
      html: RESET_SUCCESS_EMAIL_TEMPLATE.replace("{name}", name),
      category: "Reset Success Email",
    });

    console.log("(Reset Success) -> Email sent successfully: ", response);
  } catch (error) {
    throw new Error(`Error sending reset success email: ${error}`);
  }
};
