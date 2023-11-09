import React, { useState } from "react";
import { REGION_DEPTH_LIST, REGION_LIST } from "./../data/regionData";
import Button from "./Button.jsx";
import styles from "./Region.module.css";
import Libraries from "./Libraries.jsx";

export default function Region({ regionCode, library, setLibrary }) {
  const [depth, setDepth] = useState(null);
  const [depth2, setDepth2] = useState(null);

  const selectDepth1 = (e) => {
    setDepth2(null);
    setDepth(e.target.parentElement.id);
    regionCode.region = e.target.id;
    regionCode.dtl_region = null;
  };

  const selectDepth2 = (e) => {
    setDepth2(e.target.id);
    regionCode.dtl_region = e.target.id;
  };

  console.log(regionCode);

  return (
    <>
      {library.length === 0 && (
        <section className={styles.region}>
          <ul className={styles.region__depth1}>
            {REGION_LIST.map(({ idx, region, id }) => (
              <li key={idx} id={idx}>
                <Button
                  text={region}
                  id={id}
                  handleFunction={selectDepth1}
                  active={depth === idx + "" ? true : false}
                />
              </li>
            ))}
          </ul>
          {depth && (
            <ul key={depth} className={styles.region__depth2}>
              {REGION_DEPTH_LIST[depth].map(({ id, depth_2 }) => (
                <li key={id}>
                  <Button
                    text={depth_2}
                    id={id}
                    active={depth2 / 1 === id / 1 ? true : false}
                    handleFunction={selectDepth2}
                  />
                </li>
              ))}
            </ul>
          )}
        </section>
      )}
      {library.length !== 0 && (
        <Libraries library={library} setLibrary={setLibrary} />
      )}
    </>
  );
}
