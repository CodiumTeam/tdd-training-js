import React, { useState } from 'react';
import DrinkMakerOutput from './components/DrinkMaker/DrinkMakerOutput';
import MachineWrapper from './components/machine/Wrapper';
import DrinksBlock from './components/machine/DrinksBlock';
import Button from './components/buttons/Button';
import ColumnsButtonsGroup from './components/buttons/ColumnsButtonsGroup';
import RightPanel from './components/machine/RightPanel';
import StartButton from './components/start/StartButton';
import SmallButton from './components/buttons/SmallButton';
import InsertCoin from './components/coin/InsertCoin';

const drinksMapping = {
  Coffee: 'C',
  Tea: 'T',
  Chocolate: 'H',
  Message: 'M',
};

function CoffeeMachine({ drinkMaker }) {
  const [selectedDrink, setSelectedDrink] = useState('');
  const [start, setStart] = useState(false);
  const [levelOfSugar, setLevelOfSugar] = useState(0);
  const [insertedCoins, setInsertedCoins] = useState(0);
  const [command, setCommand] = useState('');

  const onStart = () => {
    let command = '';
    if (insertedCoins < 0.4) {
      const missingCoins = (0.4 - insertedCoins).toFixed(1);
      command = createCommand('M', `You need ${missingCoins} to buy "Tea"`);
    } else {
      command = createCommand();
    }

    setCommand(command);
    setStart(true);
  };

  const onSelectDrink = (drink) => {
    setSelectedDrink(drinksMapping[drink]);
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

  const createCommand = (givenCommand, message) => {
    let command = givenCommand || selectedDrink;

    if (command === 'M') {
      return command + ':' + message;
    }

    if (levelOfSugar > 0) {
      command += `:${levelOfSugar}:0`;
    } else if (levelOfSugar === 0) {
      command += `::`;
    }

    return command;
  };

  return (
    <MachineWrapper>
      <DrinksBlock>
        <ColumnsButtonsGroup>
          <Button text="Coffee" onClick={onSelectDrink} />
          <Button text="Tea" onClick={onSelectDrink} />
          <Button text="Chocolate" onClick={onSelectDrink} />
        </ColumnsButtonsGroup>
      </DrinksBlock>

      <RightPanel>
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
