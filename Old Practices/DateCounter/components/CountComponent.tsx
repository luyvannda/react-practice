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
    const newCount = Math.max(-365, count - step); //ensure no lower than -365
    onCountChange(newCount);
  }

  function handlePlus() {
    setPlusWiggling(true);

    const newCount = Math.min(365, count + step); //ensure no higher than 365
    onCountChange(newCount);
  }

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
        <p>Count: {count}</p>
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
