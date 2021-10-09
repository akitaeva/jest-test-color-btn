import { render, screen, fireEvent } from '@testing-library/react';
import App, { splitCamelWithSpace } from './App';

test('button has the correct colors and text', () => {
  render(<App />);
  // find an element with a role of button and correct text
  const btn = screen.getByRole('button', {name: 'Change to blue'});
  expect(btn).toHaveStyle({ backgroundColor: 'red'});
  // click button
  fireEvent.click(btn);
  // expect the button's bg color to be blue 
  expect(btn).toHaveStyle({ backgroundColor: 'blue'});
  // expect the button text to be 'Change to red'
  expect(btn.textContent).toBe('Change to red');
});


test('button is enabled and checkbox is unchecked', () => {
  render(<App />);
  const btn = screen.getByRole('button', {name: 'Change to blue'});
  // check the button starts enabled
  expect(btn).toBeEnabled();
  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});
  expect(checkbox).not.toBeChecked();
  // check the checkbox, assert that the button is disabled
  fireEvent.click(checkbox);
  expect(btn).toBeDisabled();
  // uncheck the checkbox, assert that the button is re-enabled
  fireEvent.click(checkbox);
  expect(btn).toBeEnabled();
});

test('disabled button has gray bg and reverts to red', () => {
  render(<App />);
  const btn = screen.getByRole('button', {name: 'Change to blue'});
  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});
  
  fireEvent.click(checkbox);
  expect(btn).toHaveStyle({ backgroundColor: 'gray'});

  fireEvent.click(checkbox);
  expect(btn).toHaveStyle({ backgroundColor: 'red'});
});

test('clicked disabled button has grey bg and reverts to blue', () => {
  render(<App />);
  const btn = screen.getByRole('button', {name: 'Change to blue'});
  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});
  
  fireEvent.click(checkbox);
  expect(btn).toHaveStyle({ backgroundColor: 'gray'});

  fireEvent.click(checkbox);
  expect(btn).toHaveStyle({ backgroundColor: 'red'});
});

describe('has spaces before camel-case capital letters', ()=> {
  test('Works for no inner capital letters', () => {
    expect(splitCamelWithSpace('Red')).toBe('Red');
  });

  test('Works for one capital letter', () => {
    expect(splitCamelWithSpace('MidnightBlue')).toBe('Midnight Blue');
  });

  test('Works for multiple capital letters', ()=> {
    expect(splitCamelWithSpace('MediumVioletRed')).toBe('Medium Violet Red');
  });
})