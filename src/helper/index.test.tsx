import { handleSearch, handleCompleted } from 'helper';

test('filter item', () => {
  expect(
    handleSearch(
      {
        userId: 1,
        id: 1,
        title: 'title_1',
        completed: true,
      },
      'e_1'
    )
  ).toBeTruthy();

  expect(
    handleSearch(
      {
        userId: 1,
        id: 1,
        title: 'title_1',
        completed: true,
      },
      'e_2'
    )
  ).toBeFalsy();
});

test('filter item with whitespace', () => {
  expect(
    handleSearch(
      {
        userId: 1,
        id: 1,
        title: 'title_1',
        completed: true,
      },
      'e_1  '
    )
  ).toBeTruthy();
});

test('handleCompleted item', () => {
  expect(
    handleCompleted(
      {
        userId: 1,
        id: 1,
        title: 'title_1',
        completed: true,
      },
      'yes'
    )
  ).toBeTruthy();
  expect(
    handleCompleted(
      {
        userId: 2,
        id: 2,
        title: 'title_2',
        completed: false,
      },
      'no'
    )
  ).toBeTruthy();
});

test('handleCompleted item with all', () => {
  expect(
    handleCompleted(
      {
        userId: 1,
        id: 1,
        title: 'title_1',
        completed: true,
      },
      'all'
    )
  ).toBeTruthy();
  expect(
    handleCompleted(
      {
        userId: 2,
        id: 2,
        title: 'title_2',
        completed: false,
      },
      'all'
    )
  ).toBeTruthy();
});
