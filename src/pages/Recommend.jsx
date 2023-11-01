import React from "react";
import styles from "./Recommend.module.css";
import ContactForm from "../components/ContactForm";
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Recommend() {
  return (
    <section className={styles.section}>
      <article>
        <div className={styles.textBox}>
          <p className={styles.title}>About</p>
          <p className={styles.description}>
            우리 사이트는 사용자에게 책과 더 가까워질 수 있도록 특정 키워드를
            기반으로 도서를 추천하고, 지역 도서관 활성화를 위해 도서관 소장
            위치를 제공합니다.
          </p>
          <p className={styles.description}>
            사용 중 불편한 점 혹은 추가 되었으면 하는 기능이 있다면 소중한
            의견을 건의해주세요!
          </p>
          <div className={styles.contact}>
            <div className={styles.nameBox}>
              <span className={styles.job}>Prolip - Front-End Developer</span>
            </div>
            <div className={styles.link}>
              <p className={styles.link__icon__git}>
                <FaGithub />
              </p>
              <p className={styles.link__icon__twi}>
                <FaTwitter />
              </p>
              <p className={styles.link__icon__ins}>
                <FaInstagram />
              </p>
            </div>
          </div>
        </div>
      </article>
      <ContactForm />
    </section>
  );
}
