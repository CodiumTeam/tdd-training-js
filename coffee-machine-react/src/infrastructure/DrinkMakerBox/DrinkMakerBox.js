import React from 'react';
import { drinkMaker } from '../drinkMaker';
import { getImagePathFromCommand} from "./drinksImages";

import './drink-maker-box.css';
import {AVAILABLE_COMMANDS} from "./AVAILABLE_COMMANDS";

function DrinkMakerBox({ command }) {
  if (!command) return null;

  const [primaryCommand, ...restOfCommand] = command.split(':');

  if (!primaryCommand) return null;

  if (!AVAILABLE_COMMANDS.includes(primaryCommand)) {
    throw new Error(`Command "${primaryCommand}" is not a valid command`);
  }

  const isSendingAMessage = primaryCommand === 'M';
  const imgSrc = getImagePathFromCommand(primaryCommand, restOfCommand);
  const imageClassName = command.replace(/:/g, '-');

  drinkMaker.execute(command);

  return (
    <div
      role="alert"
      className={`drink-maker-image drink-maker-image--${primaryCommand} ${imageClassName}`}
    >
      {isSendingAMessage ? (
        <MessageBox text={restOfCommand.join('')} />
      ) : (
        <img src={imgSrc} alt="Selected drink" />
      )}
    </div>
  );
}

function MessageBox({ text }) {
  return (
    <div className="container">
      <div className="arrow">
        <div className="outer"></div>
        <div className="inner"></div>
      </div>
      <div className="message-body">
        <p>{text}</p>
      </div>
    </div>
  );
}

export default DrinkMakerBox;
