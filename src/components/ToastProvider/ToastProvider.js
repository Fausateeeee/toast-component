import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const AddToast = ({ message, variant }) => {
    const nextToastList = [
      ...toasts,
      { message: message, variant: variant, id: Math.random() },
    ];
    setToasts(nextToastList);
  };

  const RemoveToast = (id) => {
    const nextToastList = toasts.filter((toast) => toast.id !== id);

    setToasts(nextToastList);
  };
  return (
    <ToastContext.Provider value={{ toasts, AddToast, RemoveToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
