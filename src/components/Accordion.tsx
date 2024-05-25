import { FC } from "react";
import { faqsType } from "../constants";
import AccordionItem from "./AccordionItem";

interface AccordionProp {
  data: faqsType[];
}

const Accordion: FC<AccordionProp> = ({ data }) => {
  return (
    <div className="mx-auto my-[100px] flex flex-col gap-6 lg:w-[700px]">
      {data.map((el, index) => (
        <AccordionItem num={index + 1} title={el.title} text={el.text} />
      ))}
    </div>
  );
};

export default Accordion;
