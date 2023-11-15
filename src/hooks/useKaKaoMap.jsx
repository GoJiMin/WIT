import { useRef } from "react";

const { kakao } = window;

export function useMap({ location }) {
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

  return { mapContainer, makeMap, moveMap };
}
