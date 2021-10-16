import React from 'react';
import { render, screen } from '@testing-library/react';
import { waitFor } from '@testing-library/dom';

import HomePage from 'pages/HomePage';
import { TABLE_HEADS } from 'constant';

test('renders without crashing', () => {
  render(<HomePage />);
  const title = screen.getByText(/Todos/i);
  expect(title).toBeInTheDocument();
});

test('render DataTable without crashing', async () => {
  render(<HomePage />);
  const loading = screen.getByText('L O A D I N G . . .');
  expect(loading).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText(TABLE_HEADS.INDEX)).toBeInTheDocument();
    expect(screen.getByText(TABLE_HEADS.TITLE)).toBeInTheDocument();
    expect(screen.getByText(TABLE_HEADS.COMPLETED)).toBeInTheDocument();
  });
});
