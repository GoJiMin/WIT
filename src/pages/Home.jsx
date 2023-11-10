import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { MdSearch } from "react-icons/md";

export default function Home() {
  return (
    <section className={styles.section}>
      <p className={styles.title}>오늘 뭐 읽지?</p>
      <div className={styles.searchBox}>
        <div className={styles.input}>
          <p className={styles.text__type}>W</p>
          <p className={styles.text}>태그를 선택해보세요!</p>
        </div>
        <Link to='/select'>
          <p className={styles.search}>
            <MdSearch />
          </p>
        </Link>
      </div>
      <div className={styles.textBox}>
        <p className={styles.description}>
          태그를 선택해 오늘 읽을 책을 추천 받아보세요.
        </p>
        <p className={styles.description}>검색 버튼을 눌러 시작해보세요!</p>
      </div>
    </section>
  );
}
