import React from 'react';

function DrinkMaker(props) {
  const drinks = ['Tea', 'Coffee', 'Chocolate'];
  return (
    <div>
      <h1>Drink Make v1</h1>

      {drinks.map((drink, index) => (
        <button key={index}>{drink}</button>
      ))}
    </div>
  );
}

export default DrinkMaker;
