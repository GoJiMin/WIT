import React, { useEffect, useRef, useState } from "react";
import Library from "./Library";
import styles from "./Libraries.module.css";
import KakaoMap from "./KakaoMap";
import Button from "./Button";

export default function Libraries({ library, setLibrary }) {
  const clicked = useRef();
  const [location, setLocation] = useState([]);
  const handleReset = () => {
    setLibrary([]);
    setLocation([]);
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
          <Button text={"초기화"} handleFunction={handleReset} />
        </div>
      </ul>
      <div className={styles.mapContainer}>
        {location.length > 0 && library.resultNum > 0 && (
          <KakaoMap location={location} />
        )}
      </div>

      {library.resultNum === 0 && (
        <div className={styles.fail}>소장 중인 도서관이 없습니다. 😥</div>
      )}
    </section>
  );
}
