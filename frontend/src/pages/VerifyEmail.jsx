import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuthStore } from "../store/auth.store";
import { AuthLayout } from "../components/AuthLayout";
import { Loader } from "lucide-react";

import lockifyLogo from "../assets/lockify-logo-2.png";

export const VerifyEmail = () => {
  const [verificationCode, setVerificationCode] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { verifyEmail, isLoading } = useAuthStore();

  // Enter key event listener
  useEffect(() => {
    document.addEventListener("keydown", handleEnterKey);
    return () => document.removeEventListener("keydown", handleEnterKey);
  }, [verificationCode, isLoading]);

  const handleSubmit = async () => {
    try {
      setError("");
      const code = verificationCode.join("");
      const response = await verifyEmail(code);

      if (response && response.success) {
        navigate("/");
      }
    } catch (error) {
      console.error(
        "Verification error details:",
        error.response?.data || error
      );
      setError(
        error.response?.data?.message ||
          "Failed to verify email. Please try again."
      );
      setVerificationCode(["", "", "", "", "", ""]);
      document.querySelector('input[name="code-0"]')?.focus();
    }
  };

  const handleChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      setError(""); // Clean error when user starts typing
      const newCode = [...verificationCode];
      newCode[index] = value;
      setVerificationCode(newCode);

      // Auto focus next input
      if (value && index < 5) {
        const nextInput = document.querySelector(
          `input[name=code-${index + 1}]`
        );
        nextInput?.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !verificationCode[index] && index > 0) {
      const prevInput = document.querySelector(`input[name=code-${index - 1}]`);
      prevInput?.focus();
    }
  };

  const handleEnterKey = (e) => {
    if (
      e.key === "Enter" &&
      verificationCode.every((digit) => digit) &&
      !isLoading
    ) {
      handleSubmit();
    }
  };

  return (
    <AuthLayout>
      {/* Left Side */}
      <div className="w-full md:w-1/2 via-black text-white p-8 flex items-center justify-center rounded-l-lg">
        <img src={lockifyLogo} alt="Lockify Logo" className="w-56 h-auto" />
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 p-10 flex flex-col justify-center rounded-r-lg bg-gradient-to-br from-white to-gray-100 shadow-inner-bright">
        <h2 className="text-2xl font-semibold mb-2">Verify your email</h2>
        <p className="text-gray-500 mb-6">
          We&apos;ve sent a verification code to your email address
        </p>

        {/* Error Message */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full p-4 rounded-lg bg-red-100 border border-red-400 text-red-500 text-sm text-center mb-6"
          >
            {error}
          </motion.div>
        )}

        {/* Verification Code Input */}
        <div className="flex gap-3 mb-6 justify-center">
          {verificationCode.map((digit, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <input
                type="text"
                name={`code-${index}`}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className={`w-12 h-14 text-center text-2xl font-sans bg-white border-2 
                  rounded-xl text-black focus:border-black focus:ring-2 focus:ring-black 
                  focus:ring-opacity-20 focus:outline-none transition-all duration-300 ease-in-out
                  hover:border-gray-400 shadow-sm
                  ${
                    digit
                      ? "border-black scale-105 font-sans font-bold"
                      : "border-gray-200"
                  }
                  ${isLoading ? "opacity-50 cursor-not-allowed" : ""}
                  focus:shadow-lg focus:scale-105`}
                maxLength={1}
                disabled={isLoading}
                style={{
                  WebkitAppearance: "none",
                  MozAppearance: "textfield",
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          type="submit"
          whileTap={{ scale: 0.98 }}
          disabled={isLoading || verificationCode.some((digit) => !digit)}
          className="w-full bg-black text-white py-2 rounded-lg font-semibold mb-4
                   disabled:opacity-50 disabled:cursor-not-allowed
                   transition-all duration-200"
        >
          {isLoading ? (
            <div className="flex items-center justify-center gap-2">
              <Loader className="animate-spin" size={20} />
              <span>Verifying...</span>
            </div>
          ) : (
            "Verify Email"
          )}
        </motion.button>
      </div>
    </AuthLayout>
  );
};

export default VerifyEmail;
