import { Item } from "./Item";
import { useState } from "react";

export function Accordion({ data }) {
  const [onOpen, setOnOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((item, i) => (
        <Item
          title={item.title}
          text={item.text}
          num={i}
          key={item.title}
          onOpen={onOpen}
          setOnOpen={setOnOpen}
        />
      ))}
    </div>
  );
}
