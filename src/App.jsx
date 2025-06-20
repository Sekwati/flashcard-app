
import React, { useState } from 'react';
import Flashcard from './components/Flashcard';
import flashcards from './data/flashcards';
import './styles/Flashcard.css'; // Import the CSS so the styles are applied

function App() {
  
  // Keep track of the index of the current flashcard
  const [currentIndex, setCurrentIndex] = useState(0);

  // Get the flashcard based on the current index
  const currentCard = flashcards[currentIndex];

  // Function to go to the next card
  const goNext = () => {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Function to go to the previous card
  const goPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className = "app-container">
      
      <h1>Flashcard App</h1>

      {/* Show the current flashcard */}
      <Flashcard question={currentCard.question} answer={currentCard.answer} />

      {/* Navigation buttons */}
      <div style={{ marginTop: '1rem' }}>
        <button onClick={goPrevious} disabled={currentIndex === 0}>
          Previous
        </button>
        <button onClick={goNext} disabled={currentIndex === flashcards.length - 1} style={{ marginLeft: '1rem' }}>
          Next
        </button>
      </div>

      {/* Progress tracker */}
      <p style={{ marginTop: '1rem' }}>
        Card {currentIndex + 1} of {flashcards.length}
      </p>

    </div>
  );
  
}

export default App;
