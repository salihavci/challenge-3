import Item from "./Item";

function Accordion({ items }) {
  return (
    <div className="accordion">
      {items.map((x, index) => {
        return <Item item={x} index={index} key={index} />;
      })}
    </div>
  );
}

export default Accordion;
