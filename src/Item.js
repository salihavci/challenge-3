function Item({ item, index, curOpen, onOpen, children }) {
  const isOpen = index === curOpen;

  function handleToggle() {
    onOpen(isOpen ? null : index);
  }

  return (
    <div className={`item ${isOpen && `open`}`} onClick={handleToggle}>
      <p className="number">{index + 1 < 9 ? `0${index + 1}` : index + 1}</p>
      <p className="title">{item.title}</p>
      <p className="icon">{isOpen ? `-` : `+`}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
export default Item;
