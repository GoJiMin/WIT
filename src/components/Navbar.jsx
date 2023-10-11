import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { PiBookOpenBold } from "react-icons/pi";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <Link to='/'>
          <span>WIT</span>
          <span className={styles.icon}>
            <PiBookOpenBold />
          </span>
        </Link>
      </h1>
      <div className={styles.list}>
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
