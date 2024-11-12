import { ToastError, ToastSucess } from "../components/Toast";
import { create } from "zustand";
import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";
axios.defaults.withCredentials = true;

export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  error: null,
  isCheckingAuth: true,
  isLoading: false,

  signup: async (email, password, name) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/signup`, {
        email,
        password,
        name,
      });
      set({
        user: response.data.user,
        isAuthenticated: true,
        isLoading: false,
      });
      ToastSucess.success("User created successfully!");
    } catch (error) {
      ToastError.error(error.response.data.message || "Error signing up");
      set({
        error: error.response.data.message || "Error signing up",
        isLoading: false,
      });
      throw error;
    }
  },

  verifyEmail: async (token) => {
    set({ isLoading: true, error: null });
    try {
      const verificationToken = token.toString().padStart(6, "0");

      const response = await axios.post(
        `${API_URL}/verify-email`,
        { verificationToken: verificationToken }, // Adjust this field to match with API backend
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (response.data.success) {
        set({
          user: response.data.user,
          isAuthenticated: true,
          isLoading: false,
        });
        ToastSucess.success("Email verified successfully!");
        return response.data;
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Error verifying email";
      console.error("Verification error:", errorMessage);
      ToastError.error(errorMessage);
      set({
        error: errorMessage,
        isLoading: false,
      });
      throw error;
    }
  },
}));
