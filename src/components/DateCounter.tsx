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

  const today = new Date();

  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const formattedDate = today.toLocaleDateString("en-US", options);

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <StepComponent step={step} onStepChange={handleStepChange} />
      <CountComponent
        step={step}
        count={count}
        onCountChange={handleCountChange}
      />
      {count === 0 && <p>Today is {`${formattedDate}`}</p>}
      {count >= 1 && count <= 30 && (
        <p>{`${count} days from today is ${formattedDate + count} `}</p>
      )}
    </div>
  );
}
