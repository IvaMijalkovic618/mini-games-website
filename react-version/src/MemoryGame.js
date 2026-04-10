import { useState } from "react";

const emojis = ["⭐","❤️","🐱","🚀","🐶","🌙","🍎","🌈"];

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function MemoryGame({ onBack }) {
  const [cards, setCards] = useState(shuffle([...emojis, ...emojis]));
  const [flipped, setFlipped] = useState([]);

  const handleClick = (index) => {
    if (flipped.length === 2) return;
    setFlipped([...flipped, index]);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Memory Game</h2>

      <button onClick={onBack}>⬅ Back</button>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 80px)",
        gap: "10px",
        justifyContent: "center"
      }}>
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            style={{
              width: "80px",
              height: "80px",
              background: "lightblue",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
              cursor: "pointer"
            }}
          >
            {flipped.includes(index) ? card : "❓"}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MemoryGame;