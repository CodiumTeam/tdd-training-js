import { useState } from 'react';

function App() {
  function handleOnKeyPress(event) {
    if (event.key === 'Enter') {
      const newItem = {
        title: event.target.value,
        checked: false
      };
      setItems([...items, newItem]);
      setInputText('');
    }
  }

  function handleOnChange(event) {
    setInputText(event.target.value);
  }

  function handleOnCheckboxChange(index, checkboxState) {
    const item = items[index];
    const updatedItem = {...item, checked: checkboxState}
    const newListItems = [...items];
    newListItems[index] = updatedItem;
    setItems(newListItems)
  }

  const firstDefaultItem = {
    title: 'Learn TDD',
    checked: false
  }
  const secondDefaultItem = {
    title: 'Start writing a test',
    checked: false
  }
  const defaultItems = [firstDefaultItem, secondDefaultItem];
  const [items, setItems] = useState(defaultItems);
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
        {items.map((item, index) => {
          return (
            <li key={index} className={item.checked ? 'completed' : ''}>
              <input type="checkbox" onChange={(event) => {
                handleOnCheckboxChange(index, event.target.checked);
              }}/>
              <p>{item.title}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
