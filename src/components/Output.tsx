import { FC } from "react";

interface OutputProps {
  bill: number;
  tip: number;
}

const Output: FC<OutputProps> = ({ bill, tip }) => {
  return (
    <>
      <p className="font-bold">
        You pay ${bill + tip} (${bill} + ${tip} tip)
      </p>
    </>
  );
};

export default Output;
