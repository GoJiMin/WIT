import React, { useRef, useState } from "react";
import styles from "./Book.module.css";
import Modal from "./Modal";
import Region from "./Region";
import { libraryLocation, libraryLocationMock } from "../services/library";
import { unescapeHtml } from "./../services/unescape";

export default function Book({
  data: { title, description, author, cover, isbn13 },
}) {
  const regionCode = useRef({ region: null, dtl_region: null });
  const [library, setLibrary] = useState([]);

  const handleConfirm = () => {
    if (regionCode.current.region === null) {
      return;
    }
    libraryLocation({
      isbn: isbn13,
      region: regionCode?.current?.region,
      dtl_region: regionCode?.current?.dtl_region,
    }).then((res) => setLibrary(res.data.response));
  };

  const unescapeTitle = unescapeHtml(title);
  const unescapeDes = unescapeHtml(description);

  return (
    <section className={styles.book}>
      <div className={styles.imgBox}>
        <img className={styles.img} src={cover} alt={title} />
      </div>
      <div className={styles.textBox}>
        <div className={styles.titleBox}>
          <p className={styles.title}>{unescapeTitle}</p>
          <p className={styles.author}>{author}</p>
        </div>
        <p className={styles.description}>{unescapeDes}</p>
        <div className={styles.linkList}></div>
        <Modal
          type='confirm'
          text={"소장 도서관"}
          title={"위치 선택"}
          library={library}
          handleConfirm={handleConfirm}
          region={regionCode.current}
          component={
            <Region
              regionCode={regionCode.current}
              library={library}
              setLibrary={setLibrary}
            />
          }
        />
      </div>
    </section>
  );
}
