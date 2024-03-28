import { FC } from "react";

interface StepComponentProps {
  step: number;
  onStepChange: (newStep: number) => void;
}

const StepComponent: FC<StepComponentProps> = ({ step, onStepChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onStepChange(parseInt(e.target.value));
  };

  return (
    <>
      <div className="flex gap-2">
        <input
          onChange={handleChange}
          type="range"
          min={0}
          max={10}
          defaultValue={step}
        />

        <p>{step}</p>
      </div>
    </>
  );
};

export default StepComponent;
