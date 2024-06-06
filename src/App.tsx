import { useState } from "react";
import "./App.css";
import Bill from "./components/Bill";
import SelectedInput from "./components/SelectedInput";
import Output from "./components/Output";
import ResetBtn from "./components/ResetBtn";

function App() {
  const [bill, setBill] = useState<number | string>("");
  const [userTips, setUserTips] = useState(0);
  const [friendTips, setFriendTips] = useState(0);

  const tip = Number(bill) * ((userTips + friendTips) / 2 / 100);

  const handleReset = () => {
    setBill("");
    setUserTips(0);
    setFriendTips(0);
  };

  return (
    <>
      <form className="flex flex-col space-y-2 p-4">
        <Bill setBill={setBill} bill={bill} />
        <SelectedInput onSelect={setUserTips} selectedTips={userTips}>
          How did you like the service?
        </SelectedInput>

        <SelectedInput onSelect={setFriendTips} selectedTips={friendTips}>
          How did your friend like the Service?
        </SelectedInput>

        {Number(bill) > 0 && (
          <>
            <Output bill={bill} tip={tip} />
            <ResetBtn onClick={handleReset} />
          </>
        )}
      </form>
    </>
  );
}

export default App;
