import React, { useState } from 'react';

import './columns-buttons-group.css';

function ButtonsGroup({ children }) {
  const childrens = React.Children.toArray(children);
  const [selectedButton, setSelectedButton] = useState('');

  // This is just for "hiding complexity" to developers who are learning TDD
  // It's not a good practice to use it in a production code
  const handleClick = (event) => {
    const target = event.target;
    const classNames = target.className || '';

    if (classNames.includes('button')) {
      const text = target.textContent;
      setSelectedButton(text);
    }
  };

  return (
    <ul className="button-group">
      {childrens.map((child, index) => {
        const childText = child.props.text;
        return (
          <li
            key={index}
            onClick={handleClick}
            className={childText === selectedButton ? 'is-selected' : ''}
          >
            {child}
          </li>
        );
      })}
    </ul>
  );
}

export default ButtonsGroup;
