import "./App.css";

export default function Die({ isHeld, holdDice, value }) {
  const styles = {
    backgroundColor: isHeld ? "#59E391" : "#FFF",
  };
  return (
    <div className="die-face" style={styles} onClick={holdDice}>
      <h2 className="die-num">{value}</h2>
    </div>
  );
}
