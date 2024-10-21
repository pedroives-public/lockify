import { WELCOME_EMAIL_TEMPLATE } from "../templates.js";
import { mailtrapClient, sender } from "../mailtrap.config.js";

export const sendWelcomeEmail = async (email, name) => {
    const recipient = [{ email }];
    
    try {
        const response = await mailtrapClient.send({
        from: sender,
        to: recipient,
        subject: "Welcome to Lockify",
        html: WELCOME_EMAIL_TEMPLATE.replace("{name}", name),
        category: "Welcome Email",
        });
    
        console.log("(Welcome) -> Email sent successfully: ", response);
    } catch (error) {
        throw new Error(`Error sending welcome email: ${error}`);
    }
};