import React from 'react';

import './drink-maker.css';

function DrinkMakerPinter({ command, drinkMaker }) {
  if (!command) return <div className="output"></div>;

  const imgSrc = drinkMaker.execute(command);
  const [drink] = command.split(':');

  return (
    <div className="output">
      <div
        role="alert"
        className={`drink-maker-image drink-maker-image--${drink}`}
      >
        <img src={imgSrc} alt="Selected drink" />
      </div>
    </div>
  );
}

export default DrinkMakerPinter;
