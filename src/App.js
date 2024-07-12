import { useState } from "react";
import BillInput from "./components/BillInput";
import MyPercentage from "./components/MyPercentage";
// import FriendPercentage from "./components/FriendPercentage";

export default function App() {
  const [billInput, setBillInput] = useState("");
  const [myPercentage, setMyPercentage] = useState("");

  return (
    <div className="App">
      <BillInput billInput={billInput} setBillInput={setBillInput} />
      <MyPercentage
        myPercentage={myPercentage}
        setMyPercentage={setMyPercentage}
      />
      {/* <FriendPercentage>
        <p>How did your friend like the service</p>
      </FriendPercentage> */}
    </div>
  );
}
