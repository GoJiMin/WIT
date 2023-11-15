import React, { useState } from "react";
import styles from "./Modal.module.css";
import Confirm from "./Confirm.jsx";
import Alert from "./Alert.jsx";
import Description from "./Description";
import { useOutletContext } from "react-router-dom";

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

  // 스크롤 잠금
  const enableScrollLock = () => {
    const { body } = document;

    if (!body.getAttribute("scrollY")) {
      const pageY = window.pageYOffset;

      body.setAttribute("scrollY", pageY.toString());

      body.style.overflow = "hidden";
      body.style.position = "fixed";
      body.style.left = "0px";
      body.style.right = "0px";
      body.style.bottom = "0px";
      body.style.top = `-${pageY}px`;
    }
  };

  // 스크롤 잠금 해제
  const disableScrollLock = () => {
    const { body } = document;

    if (body.getAttribute("scrollY")) {
      body.style.removeProperty("overflow");
      body.style.removeProperty("position");
      body.style.removeProperty("top");
      body.style.removeProperty("left");
      body.style.removeProperty("right");
      body.style.removeProperty("bottom");

      window.scrollTo(0, Number(body.getAttribute("scrollY")));

      body.removeAttribute("scrollY");
    }
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
