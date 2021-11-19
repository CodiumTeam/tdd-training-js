import React, { useState } from 'react';
import DrinksButtons from './components/DrinksButtons';
import DrinkMaker from './components/DrinkMaker/DrinkMaker';
import SugarButtons from './components/sugar/SugarButtons';
import MachineWrapper from './components/machine/Wrapper';
import StartButton from './components/start/StartButton';
import Title from './components/machine/Title';

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
      <Title />

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

          <DrinkMaker message={drink || 'No drink selected'} />

          <StartButton disabled={drink === ''} />
        </div>
      </div>
    </MachineWrapper>
  );
}

export default CoffeeMachine;
