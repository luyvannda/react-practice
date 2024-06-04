import { FC } from "react";

interface OutputProps {
  bill: number;
  userTips: number;
  friendTips: number;
}

const Output: FC<OutputProps> = ({ bill, userTips, friendTips }) => {
  const totalTips = (userTips + friendTips) / 2; // make an average between two ppl
  return (
    <>
      {bill === 0 ? (
        ""
      ) : (
        <p className="font-bold">
          You pay ${bill + totalTips} (${bill} + ${totalTips} tip)
        </p>
      )}
    </>
  );
};

export default Output;
