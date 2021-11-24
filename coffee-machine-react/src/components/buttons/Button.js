import React from 'react';
import PropTypes from 'prop-types';

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

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  small: PropTypes.bool,
};

export default Button;
