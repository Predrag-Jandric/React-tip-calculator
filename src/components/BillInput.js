export default function BillInput({bill, setBill}) {
  return (
    <div className="order">
      <p>How much was the bill?</p>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
    </div>
  );
}
