import { useState } from "react";
import StepComponent from "./StepComponent";
import CountComponent from "./CountComponent";

export default function DateCounter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const handleStepChange = (newStep: number) => {
    setStep(newStep);
  };

  const handleCountChange = (newCount: number) => {
    setCount(newCount);
  };

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <StepComponent step={step} onStepChange={handleStepChange} />
      <CountComponent
        step={step}
        count={count}
        onCountChange={handleCountChange}
      />
      {count === 0 && <p>Today is {`${date.toDateString()}`}</p>}
      {count >= 1 && count <= 365 && (
        <p>{`${count} days from today is ${date.toDateString()} `}</p>
      )}

      {count >= -365 && count < 0 && (
        <p>{`${Math.abs(count)} days ago was ${date.toDateString()}`}</p>
      )}
    </div>
  );
}
