// src/components/Flashcard.js
import React, { useState } from "react";
import "./Flashcard.css";

function Flashcard({ flashcard }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`flashcard ${flipped ? "flipped" : ""}`} onClick={() => setFlipped(!flipped)}>
      <div className="front">{flashcard.question}</div>
      <div className="back">{flashcard.answer}</div>
    </div>
  );
}

export default Flashcard;
