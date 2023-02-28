import React from "react";
import styles from "./SubmitButton.module.css";
const SubmitButton = ({ onClick, text }) => {
  return (
    <div>
      <div className={styles.buttonBox}>
        <button className={styles.twelve} onClick={onClick}>
          {text}
        </button>
      </div>
    </div>
  );
};

export default SubmitButton;
