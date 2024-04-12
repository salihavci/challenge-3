import { useState } from "react";

function Item({ item, index }) {
  const [open, setOpen] = useState(false);

  function handleSetOpen() {
    setOpen(!open);
  }

  return (
    <div className={`item ${open && `open`}`} onClick={handleSetOpen}>
      <p className="number">{index + 1 < 9 ? `0${index + 1}` : index + 1}</p>
      <p className="title">{item.title}</p>
      <p className="icon">{open ? `-` : `+`}</p>
      {open && <div className="content-box">{item.text}</div>}
    </div>
  );
}
export default Item;
