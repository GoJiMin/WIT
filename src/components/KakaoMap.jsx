import React, { useEffect } from "react";
import styles from "./KakaoMap.module.css";
import { useMap } from "../hooks/useKaKaoMap";

export default function KakaoMap({ location }) {
  const { mapContainer, makeMap, moveMap } = useMap({ location });

  useEffect(() => {
    makeMap();
  }, []);

  useEffect(() => {
    moveMap();
  }, [location]);

  return (
    <section>
      <div className={styles.map} ref={mapContainer}></div>
    </section>
  );
}
