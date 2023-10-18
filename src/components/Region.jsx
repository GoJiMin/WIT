import React, { useState } from "react";
import { REGION_DEPTH_LIST, REGION_LIST } from "./../data/regionData";
import Button from "./Button";
import styles from "./Region.module.css";

export default function Region() {
  const [depth, setDepth] = useState("");

  const handleClick = (e) => {
    setDepth(e.target.id);
  };

  return (
    <section className={styles.section}>
      <ul className={styles.region}>
        {REGION_LIST.map(({ idx, region }) => (
          <li
            className={styles.region__element}
            key={idx}
            onClick={handleClick}
          >
            <Button text={region} id={idx} />
          </li>
        ))}
      </ul>
      {depth && (
        <ul className={styles.regionList}>
          {REGION_DEPTH_LIST[depth].map(({ id, depth_1 }) => (
            <li className={styles.region_depth} key={id}>
              <Button text={depth_1} id={id} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
