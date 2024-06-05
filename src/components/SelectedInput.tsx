import { ChangeEvent, Dispatch, FC, ReactNode, SetStateAction } from "react";

interface SelectedInputProps {
  children: ReactNode;
  onSelect: Dispatch<SetStateAction<number>>;
  selectedTips: number;
}

const SelectedInput: FC<SelectedInputProps> = ({
  children,
  onSelect,
  selectedTips,
}) => {
  const handleOnSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const friendInput = parseInt(e.target.value);
    onSelect(friendInput);
  };

  return (
    <div className="space-y-2">
      <div className="flex flex-col gap-2">
        <label htmlFor="user-rating">{children}</label>
        <select
          value={selectedTips}
          name="user-rating"
          id="user-rating"
          className="border"
          onChange={handleOnSelect}
        >
          <option value="0">Dissatisfied (0%)</option>
          <option value="5">It was okay (5%)</option>
          <option value="10">It was good (10%)</option>
          <option value="20">Absolutely amazing! (20%)</option>
        </select>
      </div>
    </div>
  );
};

export default SelectedInput;
