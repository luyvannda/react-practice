import "./App.css";
import Accordion from "./components/Accordion";
import { faqs } from "./constants/index";

function App() {
  return (
    <div className="flex flex-col items-center p-4">
      <Accordion data={faqs} />
    </div>
  );
}

export default App;
