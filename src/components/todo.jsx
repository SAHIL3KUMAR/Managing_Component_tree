import React, { useState } from "react";

function Item(props) {
  const [isDone, setDone] = useState(false);

  function handleClick() {
    setDone((preValue) => {
      return !preValue;
    });
  }

  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.item}</li>
    </div>
  );
}

export default Item;
