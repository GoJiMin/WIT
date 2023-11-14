import React from "react";
import Button from "./Button.jsx";

export default function Library({
  data: { libName, latitude, longitude },
  id,
  location,
  handleClick,
}) {
  return (
    <section>
      <Button
        handleFunction={() => handleClick(latitude, longitude, id)}
        id={id}
        text={libName}
        active={location[2] === id ? true : false}
      />
    </section>
  );
}
