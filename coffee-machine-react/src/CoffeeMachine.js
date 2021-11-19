import React from 'react';

function DrinkMaker(props) {
  const drinks = ['Tea', 'Coffee', 'Chocolate'];

  return (
    <div className="drink-maker">
      <div className="maker">
        <h2>Select your drink</h2>
        <ul>
          {drinks.map((drink, index) => (
            <li key={index}>
              <button>{drink}</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="maker">
        <h2>Sugar</h2>
        <div className="drink-sugar">
          <button className="small">-</button>
          <p>0</p>
          <button className="small">+</button>
        </div>
      </div>

      <div className="maker start-wrapper">
        <button className="start">Start</button>
      </div>
    </div>
  );
}

export default DrinkMaker;
