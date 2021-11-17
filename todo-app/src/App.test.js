import { render, screen } from '@testing-library/react';
import App from './App';

test('displays TODO App title', () => {
  render(<App />);

  const titleElement = screen.getByText(/TODO App/i);
  expect(titleElement).toBeInTheDocument();
});
