import React from 'react';
import { render, screen } from '@testing-library/react';

import HomePage from 'pages/HomePage';

test('renders without crashing', () => {
  render(<HomePage />);
  const title = screen.getByText(/Todos/i);
  expect(title).toBeInTheDocument();
});
