import { FC, useState } from "react";

interface CountComponentProps {
  count: number;
  step: number;
  onCountChange: (newCount: number) => void;
}

const CountComponent: FC<CountComponentProps> = ({
  step,
  count,
  onCountChange,
}) => {
  const [minusWiggling, setMinusWiggling] = useState(false);
  const [plusWiggling, setPlusWiggling] = useState(false);

  function handleMinus() {
    setMinusWiggling(true);
    onCountChange(count - step);
  }

  function handlePlus() {
    setPlusWiggling(true);
    onCountChange(count + step);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const inputValue = e.target.value;
    const parsedValue = parseInt(inputValue, 10);

    if (isNaN(parsedValue)) {
      onCountChange(0);
    } else {
      onCountChange(parsedValue);
    }
  };

  return (
    <>
      <div className="flex gap-2">
        <button
          onClick={handleMinus}
          className={`bg-gray-300 px-2 hover:bg-gray-400 ${minusWiggling ? "animate-wiggle" : ""} `}
          onAnimationEnd={() => setMinusWiggling(false)}
        >
          -
        </button>
        <input
          type="text"
          value={count}
          className="rounded-md border border-black text-center"
          onChange={handleChange}
        />
        <button
          onClick={handlePlus}
          className={`bg-gray-300 px-2 hover:bg-gray-400 ${plusWiggling ? "animate-wiggle" : ""} `}
          onAnimationEnd={() => setPlusWiggling(false)}
        >
          +
        </button>
      </div>
    </>
  );
};

export default CountComponent;
