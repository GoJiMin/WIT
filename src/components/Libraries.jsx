import React from "react";
import Library from "./Library.jsx";
import styles from "./Libraries.module.css";
import KakaoMap from "./KakaoMap.jsx";
import Button from "./Button.jsx";
import { RiArrowGoBackFill } from "react-icons/ri";
import { useLocation } from "../hooks/useLibrary.jsx";

export default function Libraries({ library, handleReset }) {
  const { location, handleClick } = useLocation();

  return (
    <section className={styles.section}>
      <ul
        className={
          library.resultNum > 0 ? `${styles.libList}` : `${styles.nothing}`
        }
      >
        {library?.libs?.map(({ lib }, idx) => (
          <li key={idx}>
            <Library
              data={lib}
              id={idx}
              location={location}
              handleClick={handleClick}
            />
          </li>
        ))}
        <div className={styles.reset}>
          <Button text={<RiArrowGoBackFill />} handleFunction={handleReset} />
        </div>
      </ul>

      <div className={styles.mapContainer}>
        {location.length > 0 && library.resultNum > 0 && (
          <KakaoMap location={location} />
        )}
      </div>
      {library.resultNum !== 0 && (
        <p className={styles.text}>도서관을 선택해주세요 📚</p>
      )}
      {library.resultNum === 0 && (
        <div className={styles.fail}>소장 중인 도서관이 없습니다. 😥</div>
      )}
    </section>
  );
}
