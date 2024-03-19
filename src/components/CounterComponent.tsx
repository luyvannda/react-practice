import { FC, useState } from "react";

interface CounterComponentProps {
  count: number;
  onCountChange: (newCount: number) => void;
}

const CounterComponent: FC<CounterComponentProps> = ({
  count,
  onCountChange,
}) => {
  const [minusWiggling, setMinusWiggling] = useState(false);
  const [plusWiggling, setPlusWiggling] = useState(false);

  function handleMinus() {
    setMinusWiggling(true);
    if (count > -30 && count <= 30) {
      onCountChange(count - 1);
    }
  }

  function handlePlus() {
    setPlusWiggling(true);
    if (count >= -30 && count < 30) {
      onCountChange(count + 1);
    }
  }

  return (
    <>
      <div className="flex gap-2">
        <button
          onClick={handleMinus}
          className={`bg-gray-300 px-2 ${minusWiggling ? "animate-wiggle" : ""} `}
          onAnimationEnd={() => setMinusWiggling(false)}
        >
          -
        </button>
        <p>Count: {count}</p>
        <button
          onClick={handlePlus}
          className={`bg-gray-300 px-2 ${plusWiggling ? "animate-wiggle" : ""} `}
          onAnimationEnd={() => setPlusWiggling(false)}
        >
          +
        </button>
      </div>
    </>
  );
};

export default CounterComponent;
