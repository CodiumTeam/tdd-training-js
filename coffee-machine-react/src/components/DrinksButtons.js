import React from 'react';

import './drinks-buttons.css';

export default function DrinksButtons({ drinks, onSelectDrink }) {
  const [selectedDrink, setSelectedDrink] = React.useState('');

  return (
    <ul className="drinks-list">
      {drinks.map((drink, index) => (
        <li key={index}>
          <button
            className={`drink-button ${
              selectedDrink === drink ? 'drink-button--is-selected' : ''
            }`}
            onClick={() => {
              setSelectedDrink(drink);
              onSelectDrink(drink);
            }}
          >
            {drink}
          </button>
        </li>
      ))}
    </ul>
  );
}
