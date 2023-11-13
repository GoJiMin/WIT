import React, { useState } from "react";
import { REGION_DEPTH_LIST, REGION_LIST } from "./../data/regionData";
import styles from "./Region.module.css";
import Libraries from "./Libraries.jsx";
import Select from "react-select";

export default function Region({ setRegion, library, setLibrary, region }) {
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

  return (
    <>
      {library.length === 0 && (
        <section className={styles.section}>
          <div className={styles.selectBox}>
            <Select
              className={styles.select}
              value={region.region}
              options={options__depth1}
              menuPortalTarget={document.body}
              isSearchable={false}
              styles={{
                menuPortal: (base) => ({
                  ...base,
                  fontSize: "16px !important",
                  zIndex: 9999,
                }),
              }}
              onChange={handleSelect}
              placeholder={"지역 선택"}
            />
            <Select
              className={styles.select}
              value={region.dtl_region}
              options={options__depth2}
              menuPortalTarget={document.body}
              isSearchable={false}
              styles={{
                menuPortal: (base) => ({
                  ...base,
                  fontSize: "16px !important",
                  zIndex: 9999,
                }),
              }}
              onChange={handleDepth2Select}
              placeholder={"세부 지역 선택"}
            />
          </div>
        </section>
      )}
      {library.length !== 0 && (
        <Libraries library={library} setLibrary={setLibrary} />
      )}
    </>
  );
}
