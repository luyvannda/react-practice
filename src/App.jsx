import { useEffect, useState } from "react";
import "./App.css";
import Message from "./components/Message";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((count) => count + 1);
  }

  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <div className="pt-6 pl-4 text-2xl text-center space-y-5">
      <h1 className="font-semibold">{advice}</h1>
      <button
        onClick={getAdvice}
        className="px-3 bg-blue-400 text-white rounded-lg hover:bg-blue-500 focus:outline-slate-500 active:bg-blue-600 shadow-md"
      >
        Get Advice
      </button>

      <Message count={count} />
    </div>
  );
}
