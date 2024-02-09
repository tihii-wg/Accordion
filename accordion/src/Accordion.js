import { Item } from "./Item";

export function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((item, i) => (
        <Item title={item.title} text={item.text} num={i} rey={i} />
      ))}
    </div>
  );
}
