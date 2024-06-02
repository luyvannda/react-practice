import { FC, useState } from "react";
import { faqsType } from "../constants";
import AccordionItem from "./AccordionItem";

interface AccordionProp {
  data: faqsType[];
}

const Accordion: FC<AccordionProp> = ({ data }) => {
  const [curOpen, setCurOpen] = useState<null | number>(null);

  return (
    <div className="mx-auto my-[100px] flex flex-col gap-6 lg:w-[700px]">
      {data.map((el, index) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          num={index + 1}
          title={el.title}
          key={el.title}
        >
          {el.text}
        </AccordionItem>
      ))}

      <AccordionItem
        curOpen={curOpen}
        onOpen={setCurOpen}
        num={22}
        title={`Test 1: Learning React`}
        key={`test 1`}
      >
        <p>Allows React developers to:</p>
        <ul className="ml-5 mt-4 flex list-disc flex-col gap-4 text-[#868e96]">
          <li>Break up UI into component</li>
          <li>Make components reusable</li>
          <li>Place state efficiently</li>
        </ul>
      </AccordionItem>
    </div>
  );
};

export default Accordion;
