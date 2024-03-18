import { useState } from "react";
import StepComponent from "./StepComponent";

export default function DateCounter() {
  const [step, setStep] = useState(1);

  const handleStepChange = (newStep: number) => {
    setStep(newStep);
  };

  return (
    <div className="flex flex-col gap-4">
      <StepComponent step={step} onStepChange={handleStepChange} />
    </div>
  );
}
