import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";

import ToastShelf from "../ToastShelf";

import { ToastContext } from "../ToastProvider/ToastProvider";
import useEscapeKey from "../../hooks/UseEscapeKey";
const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const { AddToast, RemoveAll } = React.useContext(ToastContext);
  const [variant, setVariant] = React.useState("notice");
  const [message, setMessage] = React.useState("");
  const textAreaRef = React.useRef();

  useEscapeKey(RemoveAll);

  function handleSubmitToast(event) {
    event.preventDefault();

    AddToast({ message, variant });

    setVariant("notice");
    setMessage("");
    textAreaRef.current.focus();
  }
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />
      <form className={styles.controlsWrapper} onSubmit={handleSubmitToast}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              ref={textAreaRef}
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((inputVariant, index) => {
              return (
                <label key={index} htmlFor={`variant-${inputVariant}`}>
                  <input
                    id={`variant-${inputVariant}`}
                    type="radio"
                    name="variant"
                    value={inputVariant}
                    checked={variant === inputVariant}
                    onChange={(event) => setVariant(event.target.value)}
                  />
                  {inputVariant}
                </label>
              );
            })}
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
