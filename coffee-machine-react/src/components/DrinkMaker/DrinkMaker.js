import React from 'react';

import './drink-maker.css';

function DrinkMakerPinter({ command, drinkMaker }) {
  if (!command) return <DrinkMakerWrapper />;

  const drinks = ['T', 'C', 'H', 'O', 'M'];
  const [drink] = command.split(':');

  if (!drink) return <DrinkMakerWrapper />;

  if (!drinks.includes(drink)) {
    throw new Error(`Command "${drink}" is not a valid command`);
  }

  const imgSrc = drinkMaker.execute(command);

  return (
    <DrinkMakerWrapper>
      <div
        role="alert"
        className={`drink-maker-image drink-maker-image--${drink}`}
      >
        <img src={imgSrc} alt="Selected drink" />
      </div>
    </DrinkMakerWrapper>
  );
}

function DrinkMakerWrapper({ children }) {
  return <div className="output">{children}</div>;
}

export default DrinkMakerPinter;
