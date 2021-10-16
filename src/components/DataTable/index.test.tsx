import React from 'react';
import { render, screen } from '@testing-library/react';
import { waitFor } from '@testing-library/dom';

import DataTable from 'components/DataTable';
import { TABLE_HEADS } from 'constant';

test('render DataTable without crashing', async () => {
  render(<DataTable />);
  const loading = screen.getByText('L O A D I N G . . .');
  expect(loading).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText(TABLE_HEADS.INDEX)).toBeInTheDocument();
    expect(screen.getByText(TABLE_HEADS.TITLE)).toBeInTheDocument();
    expect(screen.getByText(TABLE_HEADS.COMPLETED)).toBeInTheDocument();
  });
});
