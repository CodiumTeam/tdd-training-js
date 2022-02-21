import React from 'react';
import NullComponent from "./components/NullComponent";
import ShowDrink from "./components/ShowDrink";
import {isValidCommand} from "./validator/isValidCommand";
import {drinkMaker} from '../drinkMaker';

import './drink-maker-box.css';

function DrinkMakerBox({command = ''}) {
    if (!isValidCommand(command)) {
        return <NullComponent/>
    }

    drinkMaker.execute(command);

    return <ShowDrink command={command}/>
}


export default DrinkMakerBox;
