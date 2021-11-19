import React, { useState } from 'react';

function DrinkMaker(props) {
  const drinks = ['Tea', 'Coffee', 'Chocolate'];
  const [drink, setDrink] = useState('');

  return (
    <div className="machine">
      {/* Message Block */}
      <div role="alert" className="alert">
        <p>Message goes here</p>
      </div>

      <div className="drink-maker">
        {/* Drinks Buttons  */}
        <div className="maker drinks">
          <h2>Select your drink</h2>
          <ul className="drinks-list">
            {drinks.map((drink, index) => (
              <li key={index}>
                <button
                  className="drink-button"
                  onClick={() => {
                    setDrink(drink);
                  }}
                >
                  {drink}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="maker sugar">
          <h2>Sugar</h2>

          {/* Sugar Buttons */}
          <div className="sugar-buttons">
            <button className="small">-</button>
            <p>0</p>
            <button className="small">+</button>
          </div>

          {/* Start */}
          <div className="maker start-wrapper">
            <button className="start" disabled={!drink}>
              Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DrinkMaker;
