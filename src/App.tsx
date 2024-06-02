import "./App.css";
import Bill from "./components/Bill";
import Input from "./components/Input";
import Output from "./components/Output";
import ResetBtn from "./components/ResetBtn";

function App() {
  return (
    <>
      <div className="flex flex-col items-center p-4">
        <Bill />
        <Input />
      </div>

      <Output />
      <ResetBtn />
    </>
  );
}

export default App;
