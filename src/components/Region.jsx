import React, { useRef, useState } from "react";
import { REGION_DEPTH_LIST, REGION_LIST } from "./../data/regionData";
import Button from "./Button";
import styles from "./Region.module.css";

export default function Region({ setRegion }) {
  const [depth, setDepth] = useState("");
  const clicked = useRef();
  const [depth2, setDepth2] = useState("");

  const handleClick = (e) => {
    setDepth(e.target.parentElement.id);
    setRegion(e);
    clicked.current = e.target.id;
  };

  return (
    <section className={styles.section}>
      <ul className={styles.region}>
        {REGION_LIST.map(({ idx, region, id }) => (
          <li
            className={
              clicked.current / 1 === id / 1
                ? `${styles.clicked}`
                : `${styles.notClicked}`
            }
            key={idx}
            id={idx}
          >
            <Button text={region} id={id} handleFunction={handleClick} />
          </li>
        ))}
      </ul>
      {depth && (
        <ul className={styles.regionList}>
          {REGION_DEPTH_LIST[depth].map(({ id, depth_2 }) => (
            <li
              className={
                depth2 / 1 === id / 1
                  ? `${styles.depth_2_clicked}`
                  : `${styles.region_depth}`
              }
              key={id}
              id={id}
              onClick={(e) => {
                setRegion(e);
                setDepth2(e.target.id);
              }}
            >
              <Button text={depth_2} id={id} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
