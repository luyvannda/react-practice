import { FC } from "react";

interface OutputProps {
  bill: number;
  userTips: number;
  friendTips: number;
}

const Output: FC<OutputProps> = ({ bill, userTips, friendTips }) => {
  return (
    <>
      {bill === 0 ? (
        ""
      ) : (
        <p className="font-bold">
          You pay ${bill} (${bill} + ${(userTips + friendTips) / 2} tips)
        </p>
      )}
    </>
  );
};

export default Output;
