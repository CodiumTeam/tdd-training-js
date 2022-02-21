import React from 'react';

import './button.css';

function Button({ text, onClick = () => {}, small = false }) {
  return (
    <button
      onClick={onClick}
      className={`button ${small ? 'small' : ''}`}
    >
      {text}
    </button>
  );
}

export default Button;
