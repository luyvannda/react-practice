import { FC, ReactNode } from "react";

interface StepMessageProps {
  step: number;
  children: ReactNode;
}

const StepMessage: FC<StepMessageProps> = ({ step, children }) => {
  return (
    <div>
      <p className="message mt-4">Step {step}</p>
      <p className="message mb-4">{children}</p>
    </div>
  );
};

export default StepMessage;
