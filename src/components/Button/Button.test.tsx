import { render, screen, fireEvent } from '@testing-library/react';
import Button from './index';

test('Testing Button with click', () => {
  render(<Button />);
  const buttonElement =  screen.getByTitle("clique");
  // clica no botão
  fireEvent.click(buttonElement)
  // pega elemento img
  const imageElement =  screen.getByAltText("sky");
  expect(buttonElement).toBeInTheDocument();
  expect(imageElement).toBeInTheDocument();
});
