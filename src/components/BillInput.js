export default function BillInput({billInput, setBillInput}) {
  return (
    <div className="order">
      <p>How much was the bill?</p>
      <input
        type="text"
        value={billInput}
        onChange={(e) => setBillInput(e.target.value)}
      />
    </div>
  );
}
