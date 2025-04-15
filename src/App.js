import React, { useState } from "react";
import flashcards from "./data/flashcards";
import Flashcard from "./components/Flashcard";
import ProgressBar from "./components/ProgressBar";
import './App.css';


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
      <div className="flashcard-wrapper">
      <Flashcard flashcard={flashcards[index]} />
      </div>
      <div style={{ marginTop: "60px", marginLeft: "40px"}}>
        <button onClick={prevCard} disabled={index === 0} style={{ width: "100px", marginRight: "20px" }}>Previous</button>
        <button onClick={nextCard} disabled={index === flashcards.length - 1} style={{ width: "100px" }}>Next</button>
        <p>{index + 1} / {flashcards.length}</p>
      </div>
    </div>
  );
}

export default App;
