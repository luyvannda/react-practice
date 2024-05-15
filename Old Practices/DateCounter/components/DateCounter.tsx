import { useState } from "react";
import StepComponent from "./StepComponent";
import CountComponent from "./CountComponent";

export default function DateCounter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [wiggling, setWiggling] = useState(false);

  const handleStepChange = (newStep: number) => {
    setStep(newStep);
  };

  const handleCountChange = (newCount: number) => {
    setCount(newCount);
  };

  const date = new Date();
  date.setDate(date.getDate() + count);

  const handleResetBtn = () => {
    setWiggling(true);
    setStep(1);
    setCount(0);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <StepComponent step={step} onStepChange={handleStepChange} />
      <CountComponent
        step={step}
        count={count}
        onCountChange={handleCountChange}
      />
      {count === 0 && <p>Today is {`${date.toDateString()}`}</p>}
      {count >= 1 && (
        <p>{`${count} days from today is ${date.toDateString()} `}</p>
      )}

      {count < 0 && (
        <p>{`${Math.abs(count)} days ago was ${date.toDateString()}`}</p>
      )}

      {count !== 0 || step !== 1 ? (
        <div>
          <button
            onClick={handleResetBtn}
            className={`transform rounded-lg bg-slate-300 px-3 py-1 text-red-400 transition duration-75 ${wiggling ? "animate-wiggle" : ""}`}
            onAnimationEnd={() => setWiggling(false)}
          >
            Reset
          </button>
        </div>
      ) : null}
    </div>
  );
}
