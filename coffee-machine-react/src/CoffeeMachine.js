import React, { useState } from 'react';
import { drinksPrices } from './drinks';
import { drinksMapping } from './drinksMapping';

import DrinkMakerOutput from './components/DrinkMaker/DrinkMakerOutput';
import MachineWrapper from './components/machine/Wrapper';
import DrinksBlock from './components/machine/DrinksBlock';
import Button from './components/buttons/Button';
import ColumnsButtonsGroup from './components/buttons/ColumnsButtonsGroup';
import RightPanel from './components/machine/RightPanel';
import StartButton from './components/start/StartButton';
import SmallButton from './components/buttons/SmallButton';
import InsertCoin from './components/coin/InsertCoin';

const createMessageCommand = (message) => {
  const messageCommand = drinksMapping['Message'];
  return `${messageCommand}:${message}`;
};
const withSugar = (command, sugar) => `${command}:${sugar}`;
const withStick = (command) => `${command}:0`;
const withoutSugarAndStick = (command) => `${command}::`;
const calculateMissingCoins = (drinkPrice, insertedCoin) => {
  return drinkPrice - insertedCoin;
};

const getDrinkName = (selectedDrink) => {
  const entries = Object.entries(drinksMapping);
  const selected = entries.find(([_, value]) => value === selectedDrink);
  const drinkName = selected[0];

  return drinkName;
};

const createCommandFromSelectedDrink = (selectedDrink, levelOfSugar) => {
  let command = selectedDrink;

  if (levelOfSugar > 0) {
    command = withSugar(selectedDrink, levelOfSugar);
    command = withStick(command);
  } else if (levelOfSugar === 0) {
    command = withoutSugarAndStick(command);
  }

  return command;
};

function CoffeeMachine({ drinkMaker }) {
  const [selectedDrink, setSelectedDrink] = useState('');
  const [start, setStart] = useState(false);
  const [levelOfSugar, setLevelOfSugar] = useState(0);
  const [insertedCoins, setInsertedCoins] = useState(0);
  const [command, setCommand] = useState('');

  const onSelectDrink = (drink) => {
    const selectedDrink = drinksMapping[drink];
    if (!selectedDrink) {
      throw new Error('Drink not found');
    }

    setSelectedDrink(selectedDrink);
  };

  const onAddSugar = () => {
    if (levelOfSugar < 2) {
      setLevelOfSugar(levelOfSugar + 1);
    }
  };

  const onRemoveSugar = () => {
    if (levelOfSugar > 0) {
      setLevelOfSugar(levelOfSugar - 1);
    }
  };

  const onInsertedCoin = (coins) => {
    setInsertedCoins(coins);
  };

  const onStart = () => {
    let command = createCommandFromSelectedDrink(selectedDrink, levelOfSugar);

    const drinkName = getDrinkName(selectedDrink);
    const drinkPrice = drinksPrices[drinkName];
    const missingCoins = calculateMissingCoins(drinkPrice, insertedCoins);

    if (missingCoins > 0) {
      command = createMessageCommand(
        `You need ${missingCoins.toFixed(1)} to buy "${drinkName}"`
      );
    }

    setCommand(command);
    setStart(true);
  };

  return (
    <MachineWrapper>
      <DrinksBlock>
        <ColumnsButtonsGroup>
          <Button text="Coffee" onClick={onSelectDrink} />
          <Button text="Tea" onClick={onSelectDrink} />
          <Button text="Chocolate" onClick={onSelectDrink} />
          <Button text="Orange" onClick={onSelectDrink} />
        </ColumnsButtonsGroup>
      </DrinksBlock>

      <RightPanel>
        <p>Sugar</p>
        <SmallButton text="-" onClick={onRemoveSugar} />
        <small>{levelOfSugar}</small>
        <SmallButton text="+" onClick={onAddSugar} />
        <InsertCoin onInsertedCoin={onInsertedCoin} />
        <StartButton onClick={onStart}>Start</StartButton>
      </RightPanel>

      <div className="output">
        {start && <DrinkMakerOutput command={command} />}
      </div>
    </MachineWrapper>
  );
}

export default CoffeeMachine;
