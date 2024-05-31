import "./App.css";
import { useState } from "react";
import Button from "./components/Button";
import StepMessage from "./components/StepMessage";

const messages: string[] = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const nextStep = () => {
    if (step < 3) setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep((prevStep) => prevStep - 1);
  };

  const handleClosetBtn = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  return (
    <>
      <button onClick={handleClosetBtn} className="close">
        x
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          <StepMessage step={step}>
            {messages[step - 1]}
            <div className="buttons py-2">
              <Button
                handleClick={() =>
                  alert(
                    `Learn how to ${messages[step - 1].toLocaleLowerCase()}`,
                  )
                }
              >
                Learn How
              </Button>
            </div>
          </StepMessage>

          {/* <p className="message">
            Step {step}: {messages[step - 1]}
          </p> */}

          <div className="buttons">
            <Button handleClick={prevStep}>
              <span>👈</span>Previous
            </Button>
            <Button handleClick={nextStep}>
              Next<span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
