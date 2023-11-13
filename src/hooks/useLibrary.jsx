import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { libraryLocation } from "../services/library";

export function useLibrary({ region, isbn13 }) {
  const [library, setLibrary] = useState([]);

  const { setSizing } = useOutletContext();

  const handleConfirm = () => {
    if (region.region === null) {
      return;
    }
    libraryLocation({
      isbn: isbn13,
      region: region?.region?.value,
      dtl_region: region?.dtl_region?.value,
    }).then((res) => setLibrary(res.data.response));
  };

  const handleReset = () => {
    setLibrary([]);
    setSizing(true);
  };

  return { library, setLibrary, handleConfirm, handleReset };
}
