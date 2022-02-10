import React, { useState } from 'react';
import DrinkMakerOutput from './components/DrinkMaker/DrinkMakerOutput';
import MachineWrapper from './components/machine/Wrapper';
import DrinksBlock from './components/machine/DrinksBlock';
import ColumnsButtonsGroup from './components/buttons/ColumnsButtonsGroup';
import RightPanel from './components/machine/RightPanel';

function CoffeeMachine() {
  const [command, setCommand] = useState('');

  return (
    <MachineWrapper>
      <DrinksBlock>
        <ColumnsButtonsGroup>
          {/*Please read the README to see the available React components.  */}
        </ColumnsButtonsGroup>
      </DrinksBlock>

      <RightPanel>
        <p>This is the right panel</p>
      </RightPanel>

      <div className="output">
        <DrinkMakerOutput command={command} />
      </div>
    </MachineWrapper>
  );
}

export default CoffeeMachine;
