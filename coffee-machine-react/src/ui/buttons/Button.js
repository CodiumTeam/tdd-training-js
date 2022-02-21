import React from 'react';

import './button.css';

function Button({ text, onClick, small }) {
  return (
    <button
      onClick={() => {
        onClick(text);
      }}
      className={`button ${small ? 'small' : ''}`}
    >
      {text}
    </button>
  );
}

export default Button;
