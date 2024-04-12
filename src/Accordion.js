import { useState } from "react";
import Item from "./Item";

function Accordion({ items }) {
  const [curOpen, setIsOpen] = useState(null);

  return (
    <div className="accordion">
      {items.map((x, index) => {
        return (
          <Item
            item={x}
            index={index}
            key={index}
            curOpen={curOpen}
            onOpen={setIsOpen}
          >
            {x.text}
          </Item>
        );
      })}
      <Item
        item={{ title: "Deneme 123" }}
        index={22}
        key={22}
        curOpen={curOpen}
        onOpen={setIsOpen}
      >
        <p>Deneme bir başlık</p>
        <ul>
          <li>Deneme 1</li>
          <li>Deneme 2</li>
          <li>Deneme 3</li>
        </ul>
      </Item>
    </div>
  );
}

export default Accordion;
