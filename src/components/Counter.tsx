import { useState } from "react";

export default function Counter() {
  const [minusWiggling, setMinusWiggling] = useState(false);
  const [plusWiggling, setPlusWiggling] = useState(false);
  const [step, setStep] = useState(1);

  function handleMinus() {
    setMinusWiggling(true);
    if (step > 1) {
      setStep((prevStep) => prevStep - 1);
    }
  }

  function handlePlus() {
    setPlusWiggling(true);
    if (step < 10) {
      setStep((prevStep) => prevStep + 1);
    }
  }

  return (
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
  );
}
