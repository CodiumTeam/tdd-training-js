import React, { useState } from 'react';
import DrinkMakerOutput from './components/DrinkMaker/DrinkMakerOutput';
import MachineWrapper from './components/machine/Wrapper';
import DrinksBlock from './components/machine/DrinksBlock';
import Button from './components/buttons/Button';
import ColumnsButtonsGroup from './components/buttons/ColumnsButtonsGroup';
import RightPanel from './components/machine/RightPanel';
import StartButton from './components/start/StartButton';
import SmallButton from './components/buttons/SmallButton';

const drinksMapping = {
  Coffee: 'C',
  Tea: 'T',
  Chocolate: 'H',
};

function CoffeeMachine({ drinkMaker }) {
  const [selectedDrink, setSelectedDrink] = useState('');
  const [start, setStart] = useState(false);
  const [levelOfSugar, setLevelOfSugar] = useState(0);

  const onStart = () => {
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
    setLevelOfSugar(levelOfSugar - 1);
  };

  const createCommand = () => {
    let command = `${selectedDrink}`;

    if (levelOfSugar === 1) {
      command += `:${levelOfSugar}:0`;
    } else if (levelOfSugar === 2) {
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
        <SmallButton text="+" onClick={onAddSugar} />
        <StartButton onClick={onStart}>Start</StartButton>
      </RightPanel>

      <div className="output">
        {start && <DrinkMakerOutput command={createCommand()} />}
      </div>
    </MachineWrapper>
  );
}

export default CoffeeMachine;
