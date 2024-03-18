import { useState } from "react";

export default function Step() {
  const [minusWiggling, setMinusWiggling] = useState(false);
  const [plusWiggling, setPlusWiggling] = useState(false);

  function animateMinus() {
    setMinusWiggling(true);
  }

  function animatePlus() {
    setPlusWiggling(true);
  }

  return (
    <div className="flex gap-2">
      <button
        onClick={animateMinus}
        className={`bg-gray-300 px-2 ${minusWiggling ? "animate-wiggle" : ""} `}
        onAnimationEnd={() => setMinusWiggling(false)}
      >
        -
      </button>
      <p>Step</p>
      <button
        onClick={animatePlus}
        className={`bg-gray-300 px-2 ${plusWiggling ? "animate-wiggle" : ""} `}
        onAnimationEnd={() => setPlusWiggling(false)}
      >
        +
      </button>
    </div>
  );
}
