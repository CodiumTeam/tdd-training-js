import { render, screen } from '@testing-library/react';
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