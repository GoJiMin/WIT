import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { PiBookOpenBold } from "react-icons/pi";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <Link to='/'>
          <span className={styles.title__text}>WIT</span>
          <span className={styles.icon}>
            <PiBookOpenBold />
          </span>
        </Link>
      </h1>
      <div className={styles.list}>
        <Link to='/recommend' className={styles.element}>
          Recommend
        </Link>
        <Link to='/about' className={styles.element}>
          About
        </Link>
        <Link to='/contact' className={styles.element}>
          Contact
        </Link>
      </div>
    </header>
  );
}
