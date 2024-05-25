import { FC, useState } from "react";

interface AccordionItemProp {
  num: number;
  title: string;
  text: string;
}

const AccordionItem: FC<AccordionItemProp> = ({ num, title, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <div
      className="item-grid grid cursor-pointer items-center gap-x-6 gap-y-8 border-y-4 border-solid border-y-white px-6 py-5 pr-12 shadow-lg"
      onClick={handleToggle}
    >
      <p className="text-lg font-medium text-[#ced4da] lg:text-2xl">
        {num < 9 ? `0${num}` : num + 1}
      </p>
      <p className="text-lg font-medium lg:text-2xl">{title}</p>
      <p className="text-lg font-medium lg:text-2xl">{isOpen ? "-" : "+"}</p>

      {isOpen && (
        <div className="col-start-2 col-end-[-1] pb-4 leading-[1.6]">
          {text}
        </div>
      )}
      {/* content-box */}
    </div>
  );
};

export default AccordionItem;
