import "./App.css";
import { useState } from "react";

const messages: string[] = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 3) {
      return setStep((prevStep) => prevStep + 1);
    }
  };

  const prevStep = () => {
    if (step > 1 && step <= 3) {
      return setStep((prevStep) => prevStep - 1);
    }
  };

  console.log(step);

  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`${step >= 3 ? "active" : ""}`}>3</div>
      </div>

      <p className="message">
        Step {step}: {messages[step - 1]}
      </p>

      <div className="buttons">
        <button onClick={prevStep} className="bg-[#7950f2] text-white">
          Previous
        </button>
        <button onClick={nextStep} className="bg-[#7950f2] text-white">
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
