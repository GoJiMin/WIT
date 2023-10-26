import React, { useState } from "react";
import styles from "./Modal.module.css";
import Confirm from "./Confirm";

export default function Modal({
  title,
  text,
  component,
  handleConfirm,
  region,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
    region.region = null;
    region.dtl_region = null;
  };

  const confirm = () => {
    handleConfirm();
  };

  return (
    <section className={styles.section}>
      <button className={styles.openButton} onClick={open}>
        {text}
      </button>
      {isOpen && (
        <Confirm
          title={title}
          content={component}
          close={close}
          confirm={confirm}
        />
      )}
    </section>
  );
}
