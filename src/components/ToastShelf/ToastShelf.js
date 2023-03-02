import React from "react";

import Toast from "../Toast";
import { ToastContext } from "../ToastProvider/ToastProvider";
import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { toasts, RemoveToast } = React.useContext(ToastContext);

  return (
    <ol className={styles.wrapper}>
      {toasts?.map(({ message, variant, id }) => {
        return (
          <li key={id} className={styles.toastWrapper}>
            <Toast variant={variant} handleClick={() => RemoveToast(id)}>
              {message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
