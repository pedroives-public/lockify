import { motion } from "framer-motion";
import { Loader, User, Mail, Lock } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthLayout } from "../components/AuthLayout";
import lockifyLogo from "../assets/lockify-logo-2.png"; // Importa o logo
import Input from "../components/Input";

import { useAuthStore } from "../store/auth.store";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { signup, isLoading } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password, name);
      navigate("/verify-email");
    } catch (error) {
      console.log(error);
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
        <h2 className="text-2xl font-semibold mb-2">Create an account</h2>
        <p className="text-gray-500 mb-6">
          Enter your email below to create your account
        </p>

        {/* Campos de Login */}
        <div className="space-y-4 mb-6">
          <form onSubmit={handleSubmit}>
            <Input
              icon={User}
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              icon={Mail}
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              icon={Lock}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
              className="w-full bg-black text-white py-2 rounded-lg font-semibold"
            >
              {isLoading ? (
                <Loader className=" animate-spin mx-auto" size={32} />
              ) : (
                "Sign Up"
              )}
            </motion.button>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
