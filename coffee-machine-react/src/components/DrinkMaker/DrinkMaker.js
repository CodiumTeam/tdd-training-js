import React from 'react';

import './drink-maker.css';

function DrinkMaker({ message }) {
  return (
    <div role="alert" className="drink-maker-message">
      <p>{message}</p>
    </div>
  );
}

export default DrinkMaker;
