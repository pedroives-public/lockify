export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Verifique seu Email</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <!-- Header -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #000000; padding: 10px;">
    <tr>
      <td align="center">
        <center><img src="https://mailsend-email-assets.mailtrap.io/fs11reorqto860dkimwsx6oquzew.png" alt="Lockify Logo" style="max-width: 80px; height: auto; display: block;"></center>
      </td>
      <td align="center" valign="middle">
        <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Verify Your Email</h1>
      </td>
    </tr>
  </table>

  <!-- Content -->
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px;">
    <p>Hello, {name}</p>
    <p>Thank you for signing up on our platform. To complete your registration, please use the verification code below:</p>

    <!-- Centralized Verification Code using Table -->
    <table width="100%" cellpadding="0" cellspacing="0" style="margin: 30px 0; background-color: #e0e0e0; border-radius: 8px;">
      <tr>
        <td align="center" style="padding: 20px;">
          <span style="font-family: Verdana, Geneva, sans-serif; font-size: 36px; font-weight: bold; letter-spacing: 15px; color: #000000; padding-left: 20px;">
            {verificationCode}
          </span>
        </td>
      </tr>
    </table>

    <p>This verification code will only be available until <strong>{verificationCodeExpiresAt}</strong>. After that, you will need to submit a new registration.</p>
    <p>Thank you for choosing our services.<br>Sincerely,<br>Lockify Team</p>
  </div>

  <!-- Footer -->
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>© 2024 Lockify. All rights reserved.<br>This is an automatic email, please do not reply.</p>
  </div>
</body>
</html>
`;

export const WELCOME_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Bem-vindo ao Lockify</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <!-- Header -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #000000; padding: 10px;">
    <tr>
      <td align="center">
        <center><img src="https://mailsend-email-assets.mailtrap.io/fs11reorqto860dkimwsx6oquzew.png" alt="Lockify Logo" style="max-width: 80px; height: auto; display: block;"></center>
      </td>
      <td align="center" valign="middle">
        <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Welcome to Lockify!</h1>
      </td>
    </tr>
  </table>

  <!-- Content -->
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px;">
    <p>Hello, {name}</p>
    <p>Congratulations! Your email has been successfully verified, and your registration is now complete.</p>

    <p>We're excited to have you on board and ready to use Lockify for secure and seamless authentication. Whether you're protecting your personal information or managing accounts, Lockify is here to help you stay safe and connected.</p>

    <p>Here are a few things you can do next:</p>
    <ul>
      <li>Explore your account settings and set up additional security features.</li>
      <li>Start using Lockify to manage your logins and authentications.</li>
      <li>Contact our support team if you have any questions or need assistance.</li>
    </ul>

    <p>Thank you for choosing Lockify. We're here to make your online experience secure and convenient.</p>
    <p>If you have any questions or need assistance, feel free to reach out to us anytime at <a href="mailto:support@lockify.com">support@lockify.com</a>.</p>

    <p>Best regards,<br>The Lockify Team</p>
  </div>

  <!-- Footer -->
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>© 2024 Lockify. All rights reserved.<br>This is an automatic email, please do not reply.</p>
  </div>
</body>
</html>
`;
