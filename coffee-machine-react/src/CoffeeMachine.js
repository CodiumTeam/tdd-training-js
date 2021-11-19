import React, { useState } from 'react';
import DrinksButtons from './components/DrinksButtons';
import SugarButtons from './components/sugar/SugarButtons';

function DrinkMaker(props) {
  const drinks = ['Tea', 'Coffee', 'Chocolate'];
  const [drink, setDrink] = useState('');
  const drinksMapping = {
    Tea: 'T',
    Coffee: 'C',
    Chocolate: 'H',
  };

  return (
    <div className="machine">
      {/* Message Block */}
      <div role="alert" className="alert">
        <p>{drink || 'Message goes here'}</p>
      </div>

      <div className="drink-maker">
        {/* Drinks Buttons  */}
        <div className="maker drinks">
          <h2>Select your drink</h2>

          <DrinksButtons
            drinks={drinks}
            onSelectDrink={(selectedDrink) => {
              setDrink(drinksMapping[selectedDrink]);
            }}
          />
        </div>

        <div className="maker sugar">
          <h2>Sugar</h2>

          <SugarButtons />

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
