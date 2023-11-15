import React, { useState } from "react";
import styles from "./Modal.module.css";
import Confirm from "./Confirm.jsx";
import Alert from "./Alert.jsx";
import Description from "./Description";
import { useOutletContext } from "react-router-dom";
import { useScrollLock } from "../hooks/useScrollLock";

export default function Modal({
  title,
  text,
  type,
  loading,
  library,
  component,
  handleConfirm,
  region,
  setRegion,
  btnText,
  content,
  author,
}) {
  const { enableScrollLock, disableScrollLock } = useScrollLock();

  const [isOpen, setIsOpen] = useState(false);
  const { setSizing } = useOutletContext();

  const open = () => {
    enableScrollLock();
    setIsOpen(true);
  };

  const close = () => {
    disableScrollLock();
    setIsOpen(false);
    setRegion && setRegion({ region: null, dtl_region: null });
    setSizing && setSizing(false);
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
