import { FC } from "react";

interface OutputProps {
  bill: number | string;
  tip: number;
}

const Output: FC<OutputProps> = ({ bill, tip }) => {
  return (
    <>
      <p className="font-bold">
        You pay ${Number(bill) + tip} (${Number(bill)} + ${tip} tip)
      </p>
    </>
  );
};

export default Output;
