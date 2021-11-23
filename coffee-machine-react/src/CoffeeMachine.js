import React, { useState } from 'react';
import DrinksButtons from './components/DrinksButtons';
import DrinkMakerPrinter from './components/DrinkMaker/DrinkMaker';
import SugarButtons from './components/sugar/SugarButtons';
import MachineWrapper from './components/machine/Wrapper';
import StartButton from './components/start/StartButton';
import InsertCoin from './components/coin/InsertCoin';

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
        <div className="drinks">
          <DrinksButtons
            drinks={drinks}
            onSelectDrink={(selectedDrink) => {
              setDrink(drinksMapping[selectedDrink]);
              setCommand(drinksMapping[selectedDrink]);
            }}
          />
        </div>

        <div className="sugar">
          <SugarButtons />

          <InsertCoin />

          <StartButton
            disabled={drink === ''}
            onClick={() => {
              setStart(true);
            }}
          />
        </div>

        <DrinkMakerPrinter drinkMaker={drinkMaker} command={command} />
      </div>
    </MachineWrapper>
  );
}

export default CoffeeMachine;
