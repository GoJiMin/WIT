import React from "react";
import Button from "./Button.jsx";

export default function Library({
  data: { libName, latitude, longitude },
  setLocation,
  id,
  clicked,
}) {
  const handleClick = (e) => {
    setLocation([latitude / 1, longitude / 1]);
    clicked.current = e.target.id;
  };
  return (
    <section>
      <Button
        handleFunction={handleClick}
        id={id}
        text={libName}
        active={clicked.current / 1 === id / 1 ? true : false}
      />
    </section>
  );
}
