export function Item({ num, title, text, onOpen, setOnOpen }) {
  const isOpen = num === onOpen;
  const toogleIsOpenHandler = () => {
    setOnOpen(isOpen ? null : num);
  };

  return (
    <div
      className={`item ${isOpen ? "open" : ""}`}
      onClick={toogleIsOpenHandler}
    >
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-text">{text}</div>}
    </div>
  );
}
