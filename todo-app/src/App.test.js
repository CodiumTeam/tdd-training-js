import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

test('displays TODO App title', () => {
  render(<App />);

  const titleElement = screen.getByText(/TODO App/i);
  expect(titleElement).toBeInTheDocument();
});

test('displays input to create a new todo', () => {
  render(<App />);

  const createNewElement = screen.getByRole('textbox');
  expect(createNewElement).toBeInTheDocument();
  expect(createNewElement.placeholder).toBe('What needs to be done?');
});

test('displays a list with 2 items by default', () => {
  render(<App />);

  const items = screen.getAllByRole('listitem');
  expect(items).toHaveLength(2);
  expect(items[0]).toHaveTextContent("Learn TDD");
  expect(items[1]).toHaveTextContent("Start writing a test");
});

test('add new todo into the list when pressing <enter>', () => {
  render(<App />);

  userEvent.type(screen.getByRole('textbox'), 'my new todo{enter}')

  const items = screen.getAllByRole('listitem');
  expect(items).toHaveLength(3);
  expect(items[2]).toHaveTextContent("my new todo");
});