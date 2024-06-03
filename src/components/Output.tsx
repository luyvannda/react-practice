import { FC } from "react";

interface OutputProps {
  bill: number;
}

const Output: FC<OutputProps> = ({ bill }) => {
  return (
    <>
      {bill === 0 ? (
        ""
      ) : (
        <p className="font-bold">
          You pay ${bill} (${bill} + tips)
        </p>
      )}
    </>
  );
};

export default Output;
