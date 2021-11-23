import React, { useState } from 'react';
import DrinksButtons from './components/DrinksButtons';
import DrinkMakerPrinter from './components/DrinkMaker/DrinkMaker';
import SugarButtons from './components/sugar/SugarButtons';
import MachineWrapper from './components/machine/Wrapper';
import StartButton from './components/start/StartButton';
import InsertCoin from './components/coin/InsertCoin';
import DrinksBlock from './components/machine/DrinksBlock';
import RightPanel from './components/machine/RightPanel';

function CoffeeMachine({ drinkMaker }) {
  const drinks = [];

  const onSelectDrink = (drink) => {};
  const onStart = () => {};
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

      <DrinkMakerPrinter drinkMaker={drinkMaker} command={''} />
    </MachineWrapper>
  );
}

export default CoffeeMachine;
