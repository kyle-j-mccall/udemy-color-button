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

test('button is disable when box is checked and enabled when unchecked', () => {
  render(<App />);
  //check that button starts out enabled
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  expect(colorButton).toBeEnabled();
  //check that checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  expect(checkbox).not.toBeChecked();
  // fire click event on checkbox
  fireEvent.click(checkbox);
  // button should be disabled
  expect(colorButton).toBeDisabled();
  // fire event that unchecks box
  fireEvent.click(checkbox);
  // button should be enabled
  expect(colorButton).toBeEnabled();
});

test('button turns gray when disabled', () => {
  render(<App />);
  // check that button is enabled and starts out blue
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
  expect(colorButton).toBeEnabled();

  // check that checkbox is unchecked
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });

  expect(checkbox).not.toBeChecked();

  // fire click event on checkbox
  fireEvent.click(checkbox);

  expect(colorButton).toBeDisabled();

  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });

  fireEvent.click(checkbox);

  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });

  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });

  fireEvent.click(checkbox);

  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });
});
