import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Create React App', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Create React App/i);
  expect(linkElement).toBeInTheDocument();
});
