import { ChangeEvent, Dispatch, FC, SetStateAction } from "react";

interface InputProps {
  setUserTips: Dispatch<SetStateAction<number>>;
  setFriendTips: Dispatch<SetStateAction<number>>;
}

const Input: FC<InputProps> = ({ setUserTips, setFriendTips }) => {
  const handleUserInput = (e: ChangeEvent<HTMLSelectElement>) => {
    const userInput = parseInt(e.target.value);
    setUserTips(userInput);
  };
  const handleFriendInput = (e: ChangeEvent<HTMLSelectElement>) => {
    const friendInput = parseInt(e.target.value);
    setFriendTips(friendInput);
  };

  return (
    <div className="space-y-2">
      <div className="flex flex-col gap-2">
        <label htmlFor="user-rating">How did you like the service?</label>
        <select
          name="user-rating"
          id="user-rating"
          className="border"
          onChange={handleUserInput}
        >
          <option value="" selected hidden disabled>
            Choose an option
          </option>
          <option value="0">Dissatisfied (0%)</option>
          <option value="5">It was okay (5%)</option>
          <option value="10">It was good (10%)</option>
          <option value="20">Absolutely amazing! (20%)</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="friend-rating">
          How did your friend like the Service?
        </label>
        <select
          name="friend-rating"
          id="friend-rating"
          className="border"
          onChange={handleFriendInput}
        >
          <option value="" selected hidden disabled>
            Choose an option
          </option>
          <option value="0">Dissatisfied (0%)</option>
          <option value="5">It was okay (5%)</option>
          <option value="10">It was good (10%)</option>
          <option value="20">Absolutely amazing! (20%)</option>
        </select>
      </div>
    </div>
  );
};

export default Input;
