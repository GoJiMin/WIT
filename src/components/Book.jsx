import React, { useRef, useState } from "react";
import styles from "./Book.module.css";
import Modal from "./Modal";
import Region from "./Region";
import { libraryLocation, libraryLocationMock } from "../services/library";

export default function Book({
  data: { title, description, author, cover, isbn13 },
}) {
  const region = useRef();
  const [library, setLibrary] = useState([]);

  const handleRegionCheck = (e) => {
    region.current = e.target.id;
  };

  // const handleConfirm = () => {
  //   libraryLocation({ isbn: isbn13, region: region.current }).then((res) =>
  //     setLibrary(res.data.response)
  //   );
  // };
  const handleConfirm = () => {
    libraryLocationMock().then((res) => setLibrary(res.response));
  };

  return (
    <section className={styles.book}>
      <div className={styles.imgBox}>
        <img className={styles.img} src={cover} alt={title} />
      </div>
      <div className={styles.textBox}>
        <div className={styles.titleBox}>
          <p className={styles.title}>{title}</p>
          <p className={styles.author}>{author}</p>
        </div>
        <p className={styles.description}>{description}</p>
        <div className={styles.linkList}></div>
        <Modal
          text={"소장 도서관 위치"}
          title={"위치 선택"}
          library={library}
          handleConfirm={handleConfirm}
          component={
            <Region
              region={region}
              setRegion={handleRegionCheck}
              library={library}
              setLibrary={setLibrary}
            />
          }
        />
      </div>
    </section>
  );
}
