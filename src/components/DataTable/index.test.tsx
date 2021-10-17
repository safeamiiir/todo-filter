import React from 'react';
import { render, screen } from '@testing-library/react';

import DataTable from 'components/DataTable';

const MockData = [
  {
    userId: 1,
    id: 1,
    title: 'title_1',
    completed: true,
  },
  {
    userId: 2,
    id: 2,
    title: 'title_2',
    completed: false,
  },
  {
    userId: 3,
    id: 3,
    title: 'title_3',
    completed: false,
  },
  {
    userId: 4,
    id: 4,
    title: 'title_4',
    completed: true,
  },
];

const head = ['#', 'Title', 'Completed'];

test('render DataTable', async () => {
  render(<DataTable head={head} data={MockData} />);
  const item_1 = screen.getByText('title_1');
  expect(item_1).toBeInTheDocument();
});

test('render DataTable with no data', async () => {
  render(<DataTable head={head} data={[]} />);

  const head_1 = screen.getByText(head[0]);
  expect(head_1).toBeInTheDocument();

  const head_2 = screen.getByText(head[1]);
  expect(head_2).toBeInTheDocument();

  const head_3 = screen.getByText(head[2]);
  expect(head_3).toBeInTheDocument();
});
