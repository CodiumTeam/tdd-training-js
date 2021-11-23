import React from 'react';

import './insert-coin.css';

function InsertCoin({ coins }) {
  return (
    <div>
      <div className="coin"></div>
      <small>{coins || 'coins'}</small>
    </div>
  );
}

export default InsertCoin;
