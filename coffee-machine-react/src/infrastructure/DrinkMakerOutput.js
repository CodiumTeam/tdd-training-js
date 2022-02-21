import React from 'react';
import { drinkMaker } from './drinkMaker';

import './drink-maker-output.css';

const DRINKS_IMAGES = {
  T: '/images/tea.png',
  'T-1-0': '/images/tea-with-sugar-stick.png',
  'T-2-0': '/images/tea-with-two-sugar-stick.png',
  C: '/images/coffee.png',
  'C-1-0': '/images/coffee-with-sugar-stick.png',
  'C-2-0': '/images/coffee-with-two-sugar-stick.png',
  H: '/images/chocolate.png',
  'H-1-0': '/images/chocolate-with-sugar-stick.png',
  'H-2-0': '/images/chocolate-with-two-sugar-stick.png',
  O: '/images/orange.png',
  'O-1-0': '/images/orange-with-sugar-stick.png',
  'O-2-0': '/images/orange-with-two-sugar-stick.png',
};

const AVAILABLE_COMMANDS = ['T', 'C', 'H', 'O', 'M'];
const getImagePathFromCommand = (primaryCommand, restOfCommand) => {
  const cleanedRestOfCommand = restOfCommand.filter(Boolean);
  const hasMoreCommand = cleanedRestOfCommand.length > 0;
  const imageKey =
    primaryCommand +
    (hasMoreCommand ? `-${cleanedRestOfCommand.join('-')}` : '');
  const imgSrc = DRINKS_IMAGES[imageKey];

  return imgSrc;
};

function DrinkMakerOutput({ command }) {
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

export default DrinkMakerOutput;
