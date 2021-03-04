import React from 'react';
import { render, screen } from '@testing-library/react';
import Student from './index';

test('renders Ola', () => {
  render(<Student name="Samuel" />);
  const element =  screen.getByTitle("ola");
  expect(element).toBeInTheDocument();
});
