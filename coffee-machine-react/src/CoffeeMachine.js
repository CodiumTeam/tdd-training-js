import React from 'react';

function DrinkMaker(props) {
  const drinks = ['Tea', 'Coffee', 'Chocolate'];

  return (
    <div>
      <div role="alert" className="alert">
        <p>Message goes here</p>
      </div>
      <div className="drink-maker">
        <div className="maker drinks">
          <h2>Select your drink</h2>
          <ul className="drinks-list">
            {drinks.map((drink, index) => (
              <li key={index}>
                <button className="drink-button">{drink}</button>
              </li>
            ))}
          </ul>
        </div>

        <div className="maker sugar">
          <h2>Sugar</h2>
          <div className="sugar-buttons">
            <button className="small">-</button>
            <p>0</p>
            <button className="small">+</button>
          </div>

          <div className="maker start-wrapper">
            <button className="start">Start</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DrinkMaker;
