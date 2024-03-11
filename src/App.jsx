import React, { useState } from 'react';
import IndexCard from './components/IndexCard';
import cardsData from './assets/cardData';
import './App.css'

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnswerShown, setIsAnswerShown] = useState(false);

  const handleNext = () => {
    setIsAnswerShown(false); 
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
  };

  const handleBack = () => {
    setIsAnswerShown(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cardsData.length) % cardsData.length);
  };

  const handleCardClick = () => {
    setIsAnswerShown(!isAnswerShown);
  };

  return (
    <div className="App">
      <h1>Welcome to the guess the Premier League Stadium test!</h1>
      <h2>There are 20 teams, can you get them all right?</h2>
      <IndexCard
        img={cardsData[currentIndex].img}
        team={cardsData[currentIndex].team}
        answer={cardsData[currentIndex].answer}
        isAnswerShown={isAnswerShown}
        onCardClick={handleCardClick}
      />
      <div className='button-container'>
        <button onClick={handleBack} disabled={currentIndex === 0}>Back</button>
        <button onClick={handleNext} disabled={currentIndex === cardsData.length - 1}>Next</button>
      </div>

    </div>
  );
}

export default App;
