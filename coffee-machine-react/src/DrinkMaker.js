import React from 'react';

function DrinkMaker(props) {
  const drinks = ['Tea', 'Coffee', 'Chocolate'];
  return (
    <div>
      <h1>Drink Maker v1</h1>

      <ul>
        {drinks.map((drink, index) => (
          <li key={index}>
            <button>{drink}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DrinkMaker;
