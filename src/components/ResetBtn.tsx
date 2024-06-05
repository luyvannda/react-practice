import { FC } from "react";

interface ResetBtnProp {
  onClick: () => void;
}

const ResetBtn: FC<ResetBtnProp> = ({ onClick }) => {
  return (
    <>
      <button
        type="button"
        className="rounded-lg bg-red-400 py-1 text-white hover:bg-green-400"
        onClick={onClick}
      >
        Reset
      </button>
    </>
  );
};

export default ResetBtn;
