import React from "react";
import styles from "./Home.module.css";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className={styles.section}>
      <h1>오늘 뭐 읽지?</h1>
      <div>
        <p>태그를 선택해 오늘 읽을 책을 추천 받아보세요.</p>
      </div>
      <Link to='/select'>
        <Button text={"Get Started"} />
      </Link>
    </section>
  );
}
