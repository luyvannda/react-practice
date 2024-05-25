import { FC } from "react";

interface AccordionItemProp {
  num: number;
  title: string;
  text: string;
}

const AccordionItem: FC<AccordionItemProp> = ({ num, title, text }) => {
  return (
    <div className="item-grid grid cursor-pointer items-center gap-x-6 gap-y-8 border-y-4 border-solid border-y-white px-6 py-5 pr-12 shadow-xl">
      <p className="text-2xl font-medium text-[#ced4da]">{num}</p>
      <p className="text-2xl font-medium">{title}</p>
      <p className="text-2xl font-medium">-</p>
      <div className="col-start-2 col-end-[-1] pb-4 leading-[1.6]">{text}</div>
      {/* content-box */}
    </div>
  );
};

export default AccordionItem;
