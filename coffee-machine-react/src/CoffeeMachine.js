import React, { useState } from 'react';
import DrinksButtons from './components/DrinksButtons';
import DrinkMakerPrinter from './components/DrinkMaker/DrinkMaker';
import SugarButtons from './components/sugar/SugarButtons';
import MachineWrapper from './components/machine/Wrapper';
import StartButton from './components/start/StartButton';

function CoffeeMachine({ drinkMaker }) {
  const drinks = ['Tea', 'Coffee', 'Chocolate'];
  const [drink, setDrink] = useState('');
  const [start, setStart] = useState('');
  const [command, setCommand] = useState('');

  const drinksMapping = {
    Tea: 'T',
    Coffee: 'C',
    Chocolate: 'H',
    Message: 'M',
  };

  return (
    <MachineWrapper>
      <div className="drink-maker">
        <div className="maker drinks">
          <DrinksButtons
            drinks={drinks}
            onSelectDrink={(selectedDrink) => {
              setDrink(drinksMapping[selectedDrink]);
              setCommand(drinksMapping[selectedDrink]);
            }}
          />
        </div>

        <div className="maker sugar">
          <SugarButtons />

          <StartButton
            disabled={drink === ''}
            onClick={() => {
              setStart(true);
            }}
          />
        </div>

        <div className="output">
          <DrinkMakerPrinter drinkMaker={drinkMaker} command={command} />
        </div>
      </div>
    </MachineWrapper>
  );
}

export default CoffeeMachine;
