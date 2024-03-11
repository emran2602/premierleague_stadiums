import React from 'react';
import './IndexCard.css';

const IndexCard = ({ img, team, answer, isAnswerShown, onCardClick }) => {
  return (
    <div className="card-container" onClick={onCardClick}>
      <div>
        <p className="card-title">{team}</p>
        {isAnswerShown && (
          <div className="card-answer">
            {img && <img src={img} alt="Stadium img" className="card-image" />}
            <p>{answer}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default IndexCard;
