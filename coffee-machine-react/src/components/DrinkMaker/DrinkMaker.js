import React from 'react';
import { drinkMaker } from '../../drinkMaker';

import './drink-maker.css';

const DRINKS_IMAGES = {
  T: '/images/tea.png',
  O: '/images/orange.png',
  C: '/images/coffee.png',
  H: '/images/chocolate.png',
};

const AVAILABLE_COMMANDS = ['T', 'C', 'H', 'O', 'M'];

function DrinkMakerPinter({ command }) {
  if (!command) return null;

  const [executedCommand, ...rest] = command.split(':');

  if (!executedCommand) return null;

  if (!AVAILABLE_COMMANDS.includes(executedCommand)) {
    throw new Error(`Command "${executedCommand}" is not a valid command`);
  }

  const isSendingAMessage = executedCommand === 'M';
  const imgSrc = DRINKS_IMAGES[executedCommand];
  const message = rest.join('');

  drinkMaker.execute(command);

  return (
    <div
      role="alert"
      className={`drink-maker-image drink-maker-image--${executedCommand}`}
    >
      {isSendingAMessage ? (
        <MessageBox text={message} />
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

export default DrinkMakerPinter;
