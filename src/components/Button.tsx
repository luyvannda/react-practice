import { FC, ReactNode } from "react";

interface ButtonProp {
  handleClick: () => void;
  children: ReactNode;
}

const Button: FC<ButtonProp> = ({ handleClick, children }) => {
  return (
    <>
      <button onClick={handleClick} className="bg-[#7950f2] text-white">
        {children}
      </button>
    </>
  );
};

export default Button;
