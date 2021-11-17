import { useState } from 'react';

function App() {
  function handleOnKeyPress(event) {
    if (event.key === 'Enter') {
      const newItem = event.target.value;
      setItems([...items, newItem]);
      setInputText('');
    }
  }

  function handleOnChange(event) {
    setInputText(event.target.value);
  }

  const [items, setItems] = useState([]);
  const [inputText, setInputText] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <h1>TODO App</h1>
      </header>
      <input
        type="text"
        placeholder="What needs to be done?"
        onKeyPress={handleOnKeyPress}
        value={inputText}
        onChange={handleOnChange}
      />
      <ul className="todo-list">
        <li>
          <input type="checkbox" />
          <p>Learn TDD</p>
        </li>
        <li>
          <input type="checkbox" />
          <p>Start writing a test</p>
        </li>
        {items.map((item, index) => {
          return (
            <li key={index}>
              <input type="checkbox" />
              <p>{item}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
