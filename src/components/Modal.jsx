import React from "react";
import styles from "./Modal.module.css";
import Confirm from "./Confirm.jsx";
import Alert from "./Alert.jsx";
import Description from "./Description";
import { useScrollLock } from "../hooks/useScrollLock";
import { useModal } from "./../hooks/useModal";

export default function Modal({
  title,
  text,
  type,
  loading,
  library,
  component,
  handleConfirm,
  region,
  handleResetRegion,
  btnText,
  content,
  author,
}) {
  const { enableScrollLock, disableScrollLock } = useScrollLock();

  const { isOpen, open, confirm, close } = useModal({
    enableScrollLock,
    disableScrollLock,
    handleResetRegion,
    handleConfirm,
  });

  return (
    <section className={styles.section}>
      <button type='button' className={styles.openButton} onClick={open}>
        {text}
      </button>
      {isOpen && type === "confirm" && (
        <Confirm
          library={library}
          title={title}
          region={region.region}
          loading={loading}
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
