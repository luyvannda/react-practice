import { FC } from "react";

interface ResetBtnProp {
  bill: number;
}

const ResetBtn: FC<ResetBtnProp> = ({ bill }) => {
  return (
    <>
      {bill === 0 ? (
        ""
      ) : (
        <button
          type="button"
          className="rounded-lg bg-red-400 py-1 text-white hover:bg-green-400 "
        >
          Reset
        </button>
      )}
    </>
  );
};

export default ResetBtn;
