import React, { useState } from 'react';
import DrinkMakerOutput from './components/DrinkMaker/DrinkMakerOutput';
import MachineWrapper from './components/machine/Wrapper';
import DrinksBlock from './components/machine/DrinksBlock';
import Button from './components/buttons/Button';
import ColumnsButtonsGroup from './components/buttons/ColumnsButtonsGroup';
import RightPanel from './components/machine/RightPanel';
// import StartButton from './components/start/StartButton';

function CoffeeMachine() {
  const [selectedDrink, setSelectedDrink] = useState('');

  const handleClick = (drink) => {
    setSelectedDrink('C::');
  };

  return (
    <MachineWrapper>
      <DrinksBlock>
        <ColumnsButtonsGroup>
          <Button text="Coffee" onClick={handleClick} />
        </ColumnsButtonsGroup>
      </DrinksBlock>

      <RightPanel>
        <p>This is the right panel</p>
        {/* <StartButton onClick={() => {}}>Start</StartButton> */}
      </RightPanel>

      <div className="output">
        {/* {start && <DrinkMakerPrinter command={''} />} */}
        <DrinkMakerOutput command={selectedDrink} />
      </div>
    </MachineWrapper>
  );
}

export default CoffeeMachine;
