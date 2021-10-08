import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has the correct initial color', () => {
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


// test('button turns blue on click', () => {
//   render(<App />);
//   const btn = screen.getByRole('button', {name: 'Change to blue'});
// });