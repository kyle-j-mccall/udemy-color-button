import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });

  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });

  expect(colorButton.textContent).toBe('Change to red');
});

test('initial conditions', () => {
  render(<App />);
  //check that button starts out enabled
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  expect(colorButton).toBeEnabled();
  //check that checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  expect(checkbox).not.toBeChecked();

  fireEvent.click(checkbox);

  expect(colorButton).toBeDisabled();
});
