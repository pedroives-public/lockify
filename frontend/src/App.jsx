import { Route, Routes } from "react-router-dom";

import FloatingShape from "./components/FloatingShape";
import { ToastProvider } from "./components/Toast";

import SignUp from "./pages/SignUp";
import VerifyEmail from "./pages/VerifyEmail";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to bg-gray-900 flex items-center justify-center relative overflow-hidden">
      <FloatingShape
        color="bg-gray-700"
        size="w-64 h-64"
        top="-5%"
        left="10%"
        delay={0}
      />
      <FloatingShape
        color="bg-gray-600"
        size="w-48 h-48"
        top="70%"
        left="80%"
        delay={5}
      />
      <FloatingShape
        color="bg-gray-500"
        size="w-32 h-32"
        top="40%"
        left="-10%"
        delay={2}
      />

      <ToastProvider>
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
        </Routes>
      </ToastProvider>
    </div>
  );
}

export default App;
