import React, { useRef, useState } from "react";
import Library from "./Library.jsx";
import styles from "./Libraries.module.css";
import KakaoMap from "./KakaoMap.jsx";
import Button from "./Button.jsx";
import { useOutletContext } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";

export default function Libraries({ library, setLibrary }) {
  const clicked = useRef();
  const [location, setLocation] = useState([]);
  const { setSizing } = useOutletContext();
  const handleReset = () => {
    setLibrary([]);
    setLocation([]);
    setSizing(true);
  };

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
              setLocation={setLocation}
              clicked={clicked}
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
