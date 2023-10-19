import React, { useRef, useState } from "react";
import { REGION_DEPTH_LIST, REGION_LIST } from "./../data/regionData";
import Button from "./Button";
import styles from "./Region.module.css";
import Libraries from "./Libraries";

export default function Region({ setRegion, library, setLibrary }) {
  const [depth, setDepth] = useState("");
  const clicked = useRef();
  const [depth2, setDepth2] = useState("");

  const handleClick = (e) => {
    setDepth(e.target.parentElement.id);
    setRegion(e);
    clicked.current = e.target.id;
  };

  return (
    <>
      {library.length === 0 && (
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
            <ul className={styles.depth2_list}>
              {REGION_DEPTH_LIST[depth].map(({ id, depth_2 }) => (
                <li
                  className={
                    depth2 / 1 === id / 1
                      ? `${styles.depth2_btn} ${styles.clicked}`
                      : `${styles.depth2_btn}`
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
      )}
      {library && <Libraries library={library} setLibrary={setLibrary} />}
    </>
  );
}
