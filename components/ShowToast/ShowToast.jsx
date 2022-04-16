import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ToastStyles from "./toast.module.scss";
export default function ShowToast() {
  return (
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
}
