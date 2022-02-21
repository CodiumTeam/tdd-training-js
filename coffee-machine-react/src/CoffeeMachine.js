import React, { useState } from 'react';
import MachineWrapper from './ui/machine/Wrapper';
import DrinksBlock from './ui/machine/DrinksBlock';
import ColumnsButtonsGroup from './ui/buttons/ColumnsButtonsGroup';
import RightPanel from './ui/machine/RightPanel';
import DrinkMakerBox from "./infrastructure/DrinkMakerBox";

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
                <DrinkMakerBox command={command} />
            </div>
        </MachineWrapper>
    );
}

export default CoffeeMachine;