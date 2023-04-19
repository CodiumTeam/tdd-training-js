import React from 'react';
import NullComponent from "./DrinkMakerBox/components/NullComponent";
import ShowDrink from "./DrinkMakerBox/components/ShowDrink";
import {isValidCommand} from "./DrinkMakerBox/validator/isValidCommand";
import {drinkMaker} from './drinkMaker';

import './DrinkMakerBox/drink-maker-box.css';

function DrinkMakerBox({command = ''}) {
    if (!isValidCommand(command)) {
        return <NullComponent/>
    }

    drinkMaker.execute(command);

    return <ShowDrink command={command}/>
}

export default DrinkMakerBox;
