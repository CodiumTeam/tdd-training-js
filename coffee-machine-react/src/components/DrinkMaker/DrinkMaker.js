import React from 'react';

import './drink-maker.css';

function DrinkMakerPinter({ command, drinkMaker }) {
  if (!command) return null;

  const commands = ['T', 'C', 'H', 'O', 'M'];
  const [executedCommand] = command.split(':');

  if (!executedCommand) return null;

  if (!commands.includes(executedCommand)) {
    throw new Error(`Command "${executedCommand}" is not a valid command`);
  }

  const isSendingAMessage = executedCommand === 'M';
  const result = drinkMaker.execute(command);

  return (
    <div
      role="alert"
      className={`drink-maker-image drink-maker-image--${executedCommand} ${command}`}
    >
      {!isSendingAMessage && <img src={result} alt="Selected drink" />}
      {isSendingAMessage && <MessageBox text={result} />}
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
