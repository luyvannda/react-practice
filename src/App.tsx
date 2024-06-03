import { useState } from "react";
import "./App.css";
import Bill from "./components/Bill";
import Input from "./components/Input";
import Output from "./components/Output";
import ResetBtn from "./components/ResetBtn";

function App() {
  const [bill, setBill] = useState(0);

  return (
    <>
      <div className="flex flex-col space-y-2 p-4">
        <Bill setBill={setBill} />
        <Input />
        <Output bill={bill} />
        <ResetBtn bill={bill} />
      </div>
    </>
  );
}

export default App;
