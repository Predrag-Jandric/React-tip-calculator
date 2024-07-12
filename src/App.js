import { useState } from "react";
import BillInput from "./components/BillInput";
import Percentage from "./components/Percentage";

export default function App() {
  const [bill, setBill] = useState(0);
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  let tip = bill * ((percentage1 + percentage2) / 2 / 100);
  let totalBill = bill + tip;

  function eraseAll() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div className="App">
      <BillInput bill={bill} setBill={setBill} />
      <Percentage percentage={percentage1} setPercentage={setPercentage1}>
        {" "}
        How did you like the service?
      </Percentage>
      <Percentage percentage={percentage2} setPercentage={setPercentage2}>
        {" "}
        How did your friend like the service?
      </Percentage>
      <h2>
        You pay ${totalBill} (${bill} + ${tip} tip)
      </h2>
      <button onClick={eraseAll}>Reset</button>
    </div>
  );
}
