import React from 'react';

import './drink-maker.css';

function DrinkMakerPinter({ command, drinkMaker }) {
  if (!command) return null;

  const imgSrc = drinkMaker.execute(command);

  return (
    <div role="alert" className={`drink-maker-message`}>
      <img src={imgSrc} alt="Selected drink" />
    </div>
  );
}

export default DrinkMakerPinter;
