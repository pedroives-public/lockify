import { CheckCircle2, AlertCircle } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Componente para o conteúdo do Toast
const ToastContent = ({ message, icon: Icon }) => (
  <div className="flex items-center gap-2">
    {Icon && <Icon className="w-5 h-5" />}
    <span>{message}</span>
  </div>
);

// Configurações padrão do Toast
const defaultConfig = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
};

// Estilos do Toast
const toastStyles = {
  success: {
    background: "#DCFCE7",
    color: "#166534",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: "500",
    padding: "16px",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
  },
  error: {
    background: "#FEE2E2",
    color: "#991B1B",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: "500",
    padding: "16px",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
  },
};

// Componente Toast
const ToastSucess = {
  success: (message, icon = null) => {
    toast.success(<ToastContent message={message} icon={icon} />, {
      ...defaultConfig,
      style: toastStyles.success,
      icon: CheckCircle2,
    });
  },
};

const ToastError = {
  error: (message, icon = null) => {
    toast.error(<ToastContent message={message} icon={icon} />, {
      ...defaultConfig,
      style: toastStyles.error,
      icon: AlertCircle,
    });
  },
};

// Componente React para o Container do Toast
const ToastProvider = ({ children }) => {
  return (
    <>
      {children}
      <ToastContainer
        position={defaultConfig.position}
        autoClose={defaultConfig.autoClose}
        hideProgressBar={defaultConfig.hideProgressBar}
        closeOnClick={defaultConfig.closeOnClick}
        pauseOnHover={defaultConfig.pauseOnHover}
        draggable={defaultConfig.draggable}
        theme={defaultConfig.theme}
      />
    </>
  );
};

export { ToastSucess, ToastError, ToastProvider };
