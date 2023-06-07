import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const Alert = ({
  type,
  message,
}) => {
  const toastOptions = {
    autoClose: 3000,
    closeButton: false,
    icon: false,
    position: toast.POSITION.BOTTOM_CENTER
  }
  
  const successAlert = () => {
    toast.success(message, {
      ...toastOptions,
      className: "success-alert",
    });
  }

  const errorAlert = () => {
    toast.error(message, {
      ...toastOptions,
      className: "error-alert",
    });
  }
  
  return type === "success" ? successAlert(message) : errorAlert(message);
}

export default Alert;