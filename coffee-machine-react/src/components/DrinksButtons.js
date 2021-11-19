import React from 'react';

import './drinks-buttons.css';

export default function DrinksButtons({ drinks, onSelectDrink }) {
  return (
    <ul className="drinks-list">
      {drinks.map((drink, index) => (
        <li key={index}>
          <button
            className="drink-button"
            onClick={() => {
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
