import React from 'react';

import './drink-maker.css';

function DrinkMakerPinter({ command, drinkMaker }) {
  if (!command) return <DrinkMakerWrapper />;

  const imgSrc = drinkMaker.execute(command);

  if (!imgSrc) return <DrinkMakerWrapper />;

  const [drink] = command.split(':');

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
