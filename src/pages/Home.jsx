import React from "react";
import styles from "./Home.module.css";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className={styles.section}>
      <p className={styles.title}>오늘 뭐 읽지?</p>
      <div className={styles.textBox}>
        <p className={styles.description}>
          태그를 선택해 오늘 읽을 책을 추천 받아보세요.
        </p>
        <p className={styles.description}>버튼을 눌러 시작해보세요!</p>
      </div>
      <Link to='/select'>
        <Button text={"시작하기"} />
      </Link>
      <img className={styles.image} src='/image/bookLogo.png' alt='logo' />
    </section>
  );
}
