import { useState } from "react";
import StepComponent from "./StepComponent";
import CounterComponent from "./CounterComponent";

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

  return (
    <div className="flex flex-col gap-4">
      <StepComponent step={step} onStepChange={handleStepChange} />
      <CounterComponent count={count} onCountChange={handleCountChange} />
      <p>Today is {`${today}`}</p>
    </div>
  );
}
