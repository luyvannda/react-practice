import "./App.css";
import Counter from "./components/Counter";
import Step from "./components/Step";

function App() {
  return (
    <div className="flex flex-col items-center p-4">
      <Step />
      <Counter />
    </div>
  );
}

export default App;
