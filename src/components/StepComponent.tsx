import { FC, useState } from "react";

interface StepComponentProps {
  step: number;
  onStepChange: (newStep: number) => void;
}

const StepComponent: FC<StepComponentProps> = ({ step, onStepChange }) => {
  const [minusWiggling, setMinusWiggling] = useState(false);
  const [plusWiggling, setPlusWiggling] = useState(false);

  function handleMinus() {
    setMinusWiggling(true);
    if (step > 1) {
      onStepChange(step - 1);
    }
  }

  function handlePlus() {
    setPlusWiggling(true);
    if (step < 10) {
      onStepChange(step + 1);
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
        <p>Step: {step}</p>

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

export default StepComponent;
