import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { PiBookOpenBold } from "react-icons/pi";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.titleBox}>
        <Link to='/' className={styles.title}>
          <img className={styles.logo} src='src/assets/image/Logo.png' alt='' />
          <span className={styles.title__text}>WIT</span>
        </Link>
      </div>
      <div className={styles.list__middle}>
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
      <div className={styles.list}>
        <p className={styles.element}>library</p>
        <p className={styles.element}>Login</p>
      </div>
    </header>
  );
}
