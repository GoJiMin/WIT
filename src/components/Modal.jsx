import React, { useState } from "react";
import styles from "./Modal.module.css";
import Confirm from "./Confirm.jsx";
import Alert from "./Alert.jsx";
import Description from "./Description";

export default function Modal({
  title,
  text,
  type,
  component,
  handleConfirm,
  region,
  btnText,
  content,
  author,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
    if (region) {
      region.region = null;
      region.dtl_region = null;
    }
  };

  const confirm = () => {
    handleConfirm();
  };

  return (
    <section className={styles.section}>
      <button type='button' className={styles.openButton} onClick={open}>
        {text}
      </button>
      {isOpen && type === "confirm" && (
        <Confirm
          title={title}
          content={component}
          close={close}
          confirm={confirm}
        />
      )}
      {isOpen && type === "alert" && (
        <Alert
          title={title}
          content={component}
          close={close}
          confirm={confirm}
          btnText={btnText}
        />
      )}
      {isOpen && type === "description" && (
        <Description
          title={title}
          content={content}
          author={author}
          close={close}
        />
      )}
    </section>
  );
}
