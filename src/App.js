// src/App.js
import React, { useState } from "react";
import flashcards from "./data/flashcards";
import Flashcard from "./components/Flashcard";
import ProgressBar from "./components/ProgressBar";

function App() {
  const [index, setIndex] = useState(0);

  const nextCard = () => {
    if (index < flashcards.length - 1) setIndex(index + 1);
  };

  const prevCard = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="App">
      <h1>Flashcards App</h1>
      <ProgressBar current={index} total={flashcards.length} />
      <Flashcard flashcard={flashcards[index]} />
      <div style={{ marginTop: "20px" }}>
        <button onClick={prevCard} disabled={index === 0}>Previous</button>
        <button onClick={nextCard} disabled={index === flashcards.length - 1}>Next</button>
        <p>{index + 1} / {flashcards.length}</p>
      </div>
    </div>
  );
}

export default App;
