import { VERIFICATION_EMAIL_TEMPLATE } from "../templates.js";
import { mailtrapClient, sender } from "../mailtrap.config.js";

export const sendVerificationEmail = async (
  email,
  name,
  verificationToken,
  verificationTokenExpiresAt
) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Verify Your Email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace("{name}", name)
        .replace("{verificationCode}", verificationToken)
        .replace("{verificationCodeExpiresAt}", verificationTokenExpiresAt),
      category: "Email Verification",
    });

    console.log("Email sent successfully: ", response);
  } catch (error) {
    throw new Error(`Error sending verification email: ${error}`);
  }
};
