import { FC } from "react";

interface AccordionItemProp {
  num: number;
  title: string;
  text: string;
}

const AccordionItem: FC<AccordionItemProp> = ({ num, title, text }) => {
  return (
    <div className="item">
      <p className="number">{num}</p>
      <p className="text">{title}</p>
      <p className="icon">-</p>
      <div className="content-box">{text}</div>
    </div>
  );
};

export default AccordionItem;
