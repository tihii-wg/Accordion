export function Item({ num, title, text }) {
  return (
    <div className={"item "}>
      <p className="number">{num}</p>
      <p className="title">{title}</p>
      <p className="icon">-</p>
      <div className="content-text">{text}</div>
    </div>
  );
}
