import React, { useState } from 'react';

import './insert-coin.css';

function InsertCoin({ onInsertedCoin }) {
  const [insertedCoins, setInsertedCoins] = useState('');

  const handleOnChange = (ev) => {
    const insertedCoin = ev.target.value;
    setInsertedCoins(insertedCoin);
    onInsertedCoin(insertedCoin);
  };

  return (
    <div>
      <input
        type="number"
        className="input"
        min="0"
        max="100"
        value={insertedCoins}
        onChange={handleOnChange}
        placeholder="Insert Coin"
      />
      <small>coins</small>
    </div>
  );
}

export default InsertCoin;
