import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders portfolio home page', () => {
  const { getByText } = render(<App />);
  const headingElement = getByText(/kayden clark/i);
  expect(headingElement).toBeInTheDocument();
});
