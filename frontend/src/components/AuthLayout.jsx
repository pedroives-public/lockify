import { motion } from "framer-motion";

export const AuthLayout = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center items-stretch w-full max-w-4xl bg-transparent rounded-lg shadow-2xl overflow-hidden custom-shadow border border-gray-200"
    >
      {children}
    </motion.div>
  );
};
