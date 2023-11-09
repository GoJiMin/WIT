import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useAuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, login, logout } = useAuthContext();
  return (
    <header className={styles.header}>
      <div className={styles.titleBox}>
        <Link to='/' className={styles.title}>
          <img
            className={styles.logo}
            src='/src/assets/image/Logo.png'
            alt=''
          />
          <span className={styles.title__text}>WIT</span>
        </Link>
      </div>

      <div className={styles.list}>
        <Link to='/recommend'>
          <p className={styles.element}>건의하기</p>
        </Link>
        {user && (
          <Link to='/library'>
            <p className={styles.element}>서재</p>
          </Link>
        )}
        {user && <p className={styles.element}>{user.displayName}</p>}
        {!user && (
          <button className={styles.element} onClick={login}>
            로그인
          </button>
        )}
        {user && (
          <button className={styles.element} onClick={logout}>
            로그아웃
          </button>
        )}
      </div>
    </header>
  );
}
