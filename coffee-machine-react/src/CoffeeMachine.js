import React, { useState, useEffect } from 'react';
import DrinksButtons from './components/DrinksButtons';
import DrinkMakerPrinter from './components/DrinkMaker/DrinkMaker';
import SugarButtons from './components/sugar/SugarButtons';
import MachineWrapper from './components/machine/Wrapper';
import StartButton from './components/start/StartButton';
import InsertCoin from './components/coin/InsertCoin';
import DrinksBlock from './components/machine/DrinksBlock';
import RightPanel from './components/machine/RightPanel';

function CoffeeMachine({ drinkMaker }) {
  const [start, setStart] = useState(false);
  const onStart = () => {
    setStart(true);
  };

  const drinks = [];
  const onSelectDrink = (drink) => {};
  const onAddSugar = () => {};
  const onRemoveSugar = () => {};

  return (
    <MachineWrapper>
      <DrinksBlock>
        <DrinksButtons drinks={drinks} onSelectDrink={onSelectDrink} />
      </DrinksBlock>

      <RightPanel>
        <SugarButtons onAddSugar={onAddSugar} onRemoveSugar={onRemoveSugar} />

        <InsertCoin coins={0} />

        <StartButton onClick={onStart} />
      </RightPanel>

      <div className="output">
        {start && <DrinkMakerPrinter drinkMaker={drinkMaker} command={''} />}
      </div>
    </MachineWrapper>
  );
}

export default CoffeeMachine;
