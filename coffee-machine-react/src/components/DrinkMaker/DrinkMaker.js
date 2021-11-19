import React from 'react';

import './drink-maker.css';

function DrinkMaker({ drink }) {
  return (
    <div role="alert" className={`drink-maker-message`}>
      <p className={drink ? '' : drink ? '' : 'drink-maker-message--empty'}>
        {drink || 'No drink selected'}
      </p>
    </div>
  );
}

export default DrinkMaker;
