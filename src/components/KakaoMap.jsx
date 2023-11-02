/*global kakao*/
import React, { useEffect, useRef } from "react";
import styles from "./KakaoMap.module.css";

const { kakao } = window;

export default function KakaoMap({ location }) {
  const mapContainer = useRef();
  const map = useRef();

  const makeMap = () => {
    const options = {
      center: new kakao.maps.LatLng(0, 0),
      level: 4,
    };
    map.current = new kakao.maps.Map(mapContainer.current, options);
  };

  const moveMap = () => {
    const moveLatLon = new kakao.maps.LatLng(location[0], location[1]);
    const markerPosition = new kakao.maps.LatLng(location[0], location[1]);
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    marker.setMap(map.current);
    map.current.setCenter(moveLatLon);
  };

  useEffect(() => {
    makeMap();
  }, []);

  useEffect(() => {
    moveMap();
  }, [location]);

  return (
    <section>
      {location.length === 0 && <div className={styles.loading}></div>}
      <div className={styles.map} ref={mapContainer}></div>
    </section>
  );
}
