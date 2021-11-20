import React, { useState } from 'react';
import DrinksButtons from './components/DrinksButtons';
import DrinkMaker from './components/DrinkMaker/DrinkMaker';
import SugarButtons from './components/sugar/SugarButtons';
import MachineWrapper from './components/machine/Wrapper';
import StartButton from './components/start/StartButton';

function CoffeeMachine(props) {
  const drinks = ['Tea', 'Coffee', 'Chocolate'];
  const [drink, setDrink] = useState('');
  const drinksMapping = {
    Tea: 'T',
    Coffee: 'C',
    Chocolate: 'H',
  };

  return (
    <MachineWrapper>
      <div className="drink-maker">
        <div className="maker drinks">
          <DrinksButtons
            drinks={drinks}
            onSelectDrink={(selectedDrink) => {
              setDrink(drinksMapping[selectedDrink]);
            }}
          />
        </div>

        <div className="maker sugar">
          <SugarButtons />

          <DrinkMaker drink={drink} />

          <StartButton disabled={drink === ''} />
        </div>
      </div>
    </MachineWrapper>
  );
}

export default CoffeeMachine;
