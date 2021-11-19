import React, { useState } from 'react';
import DrinksButtons from './components/DrinksButtons';
import MachineMessage from './components/message/MachineMessage';
import SugarButtons from './components/sugar/SugarButtons';
import MachineWrapper from './components/machine/Wrapper';
import StartButton from './components/start/StartButton';

function DrinkMaker(props) {
  const drinks = ['Tea', 'Coffee', 'Chocolate'];
  const [drink, setDrink] = useState('');
  const drinksMapping = {
    Tea: 'T',
    Coffee: 'C',
    Chocolate: 'H',
  };

  return (
    <MachineWrapper>
      <MachineMessage message={drink || 'Message goes here'} />

      <div className="drink-maker">
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

          <StartButton disabled={drink} />
        </div>
      </div>
    </MachineWrapper>
  );
}

export default DrinkMaker;
