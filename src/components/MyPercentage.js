export default function MyPercentage({ myPercentage, setMyPercentage }) {
  return (
    <div className="order">
      <p>How did you like the service</p>
      <select
        value={myPercentage}
        onChange={(e) => setMyPercentage(e.target.value)}
      >
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}
