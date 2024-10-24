import crypto from 'crypto';

export const generateResetPasswordToken = () => {
    const resetToken = crypto.randomBytes(20).toString('hex');
    return resetToken;
}