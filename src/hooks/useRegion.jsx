import { useState } from "react";
import { REGION_DEPTH_LIST, REGION_LIST } from "../data/regionData";

export function useRegion() {
  const [region, setRegion] = useState({
    region: null,
    dtl_region: null,
  });
  const [regionData, setRegionData] = useState(null);

  const options__depth1 = REGION_LIST.map(({ idx, id, region }) => ({
    value: id,
    label: region,
    idx,
  }));

  const options__depth2 = regionData
    ? regionData.map(({ id, depth_2 }) => ({
        value: id,
        label: depth_2,
      }))
    : null;

  const handleSelect = (e) => {
    setRegionData(REGION_DEPTH_LIST[e.idx]);
    setRegion((prev) => ({ ...prev, region: e, dtl_region: null }));
  };

  const handleDepth2Select = (e) => {
    setRegion((prev) => ({ ...prev, dtl_region: e }));
  };

  return {
    handleSelect,
    handleDepth2Select,
    options__depth1,
    options__depth2,
    region,
    setRegion,
  };
}
