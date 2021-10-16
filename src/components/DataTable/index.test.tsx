import React from 'react';
import { render, screen } from '@testing-library/react';

import DataTable from 'components/DataTable';
import { COMPLETED_STATES } from 'constant';

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

test('render DataTable with filter', async () => {
  render(<DataTable head={head} data={MockData} filter="_1" />);

  // ONLY item_1

  const title_1 = screen.getByText('title_1');
  expect(title_1).toBeInTheDocument();

  const item_2 = screen.queryByText('title_2');
  expect(item_2).toBeNull();

  const title_3 = screen.queryByText('title_3');
  expect(title_3).toBeNull();

  const title_4 = screen.queryByText('title_4');
  expect(title_4).toBeNull();
});

test('render DataTable with completed', async () => {
  render(
    <DataTable head={head} data={MockData} completed={COMPLETED_STATES.YES} />
  );

  // item_1 && item_4

  const item_1 = screen.getByText('title_1');
  expect(item_1).toBeInTheDocument();

  const title_2 = screen.queryByText('title_2');
  expect(title_2).toBeNull();

  const title_3 = screen.queryByText('title_3');
  expect(title_3).toBeNull();

  const item_4 = screen.getByText('title_4');
  expect(item_4).toBeInTheDocument();
});

test('render DataTable with filter and completed', async () => {
  render(
    <DataTable
      head={head}
      data={MockData}
      filter={'_2'}
      completed={COMPLETED_STATES.NO}
    />
  );

  // ONLY item_2

  const item_1 = screen.queryByText('title_1');
  expect(item_1).toBeNull();

  const title_2 = screen.getByText('title_2');
  expect(title_2).toBeInTheDocument();

  const title_3 = screen.queryByText('title_3');
  expect(title_3).toBeNull();

  const item_4 = screen.queryByText('title_4');
  expect(item_4).toBeNull();
});
