import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { libraryLocation } from "../services/library";

export function useLibrary({ region, isbn13 }) {
  const [library, setLibrary] = useState([]);
  const [loading, setLoading] = useState(false);

  const { setSizing } = useOutletContext();

  const handleConfirm = () => {
    if (region.region === null) {
      return;
    }
    setLoading(true);
    libraryLocation({
      isbn: isbn13,
      region: region?.region?.value,
      dtl_region: region?.dtl_region?.value,
    })
      .then((res) => setLibrary(res.data.response))
      .finally(() => setLoading(false));
  };

  const handleReset = () => {
    setLibrary([]);
    setSizing(true);
  };

  return { library, loading, handleConfirm, handleReset };
}

export function useLocation() {
  const [location, setLocation] = useState([]);
  const handleClick = (latitude, longitude, id) => {
    setLocation([latitude / 1, longitude / 1, id]);
  };

  return { location, handleClick };
}
