import React from 'react';

function DrinkMaker(props) {
  const drinks = ['Tea', 'Coffee', 'Chocolate'];

  return (
    <div>
      <h1>Drink Maker v1</h1>

      <div>
        <h2>Select your drink</h2>
        <ul>
          {drinks.map((drink, index) => (
            <li key={index}>
              <button>{drink}</button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <button>Add</button>
        <p>Total Sugar: 0</p>
        <button>Remove</button>
      </div>

      <div>
        <button>Start</button>
      </div>
    </div>
  );
}

export default DrinkMaker;
