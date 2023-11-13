import React from "react";
import styles from "./Region.module.css";
import Libraries from "./Libraries.jsx";
import Select from "react-select";

export default function Region({
  regionData: {
    handleSelect,
    handleDepth2Select,
    options__depth1,
    options__depth2,
    region,
  },
  library,
  handleReset,
}) {
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
        <Libraries library={library} handleReset={handleReset} />
      )}
    </>
  );
}
