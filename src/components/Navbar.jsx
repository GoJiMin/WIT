import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { login, logout, onUserStateChange } from "../services/firebase";

export default function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onUserStateChange((user) => {
      setUser(user);
    });
  }, []);

  const handleLogin = () => {
    login().then(setUser);
  };

  const handleLogout = () => {
    logout().then(setUser);
  };

  return (
    <header className={styles.header}>
      <div className={styles.titleBox}>
        <Link to='/' className={styles.title}>
          <img className={styles.logo} src='src/assets/image/Logo.png' alt='' />
          <span className={styles.title__text}>WIT</span>
        </Link>
      </div>

      <div className={styles.list}>
        <p className={styles.element}>건의하기</p>
        <p className={styles.element}>서재</p>
        {!user && (
          <button className={styles.element} onClick={handleLogin}>
            로그인
          </button>
        )}
        {user && (
          <button className={styles.element} onClick={handleLogout}>
            로그아웃
          </button>
        )}
      </div>
    </header>
  );
}
