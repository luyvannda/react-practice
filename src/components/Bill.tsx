import { ChangeEvent, Dispatch, FC, SetStateAction } from "react";

interface BillProp {
  setBill: Dispatch<SetStateAction<string | number>>;
  bill: number;
}

const Bill: FC<BillProp> = ({ setBill, bill }) => {
  const handleBill = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseInt(e.target.value);

    if (isNaN(inputValue)) {
      setBill(0);
    } else {
      setBill(inputValue);
    }
  };
  return (
    <div className="flex flex-col gap-2">
      <p>How much was the bill?</p>
      <input
        type="number"
        onChange={handleBill}
        placeholder="Bill value"
        value={bill}
        className="border border-black"
      />
    </div>
  );
};

export default Bill;
