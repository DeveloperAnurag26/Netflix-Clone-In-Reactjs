import React, { useEffect, useRef } from 'react';
import './TitleCard.css';
import cards_data from '../../assets/cards/cards_data';

const TitleCards = ({ title, category }) => {
  const cardsRef = useRef(null);

  const handleWheel = (event) => {
    event.preventDefault();
    if (cardsRef.current) {
      cardsRef.current.scrollLeft += event.deltaY;
    }
  };

  useEffect(() => {
    const cardsDiv = cardsRef.current;
    if (cardsDiv) {
      cardsDiv.addEventListener('wheel', handleWheel, { passive: false });
    }

    // Cleanup
    return () => {
      if (cardsDiv) {
        cardsDiv.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <div className='titlecards'>
      <h2>{title ? title : "Popular On Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {cards_data.map((card, index) => (
          <div className='card' key={index}>
            <img src={card.image} alt={card.name} />
            <p>{card.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
