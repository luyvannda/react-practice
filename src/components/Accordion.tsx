import { FC } from "react";
import { faqsType } from "../constants";
import AccordionItem from "./AccordionItem";

interface AccordionProp {
  data: faqsType[];
}

const Accordion: FC<AccordionProp> = ({ data }) => {
  return (
    <div className="mx-auto my-[100px] flex w-[700px] flex-col gap-6">
      {data.map((el, index) => (
        <AccordionItem num={index + 1} title={el.title} text={el.text} />
      ))}
    </div>
  );
};

export default Accordion;
