import React, { useState, useRef } from 'react';
import { render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/dom';

import Select from 'components/Select';

const options = [
  {
    label: 'label_1',
    value: 'value_1',
  },
  {
    label: 'label_2',
    value: 'value_2',
  },
];

test('select label is set', () => {
  render(
    <Select
      label="label-test"
      name="test"
      options={options}
      value={'123'}
      onChange={() => {}}
    />
  );
  const label = screen.getByText(/label-test/i);
  expect(label).toBeInTheDocument();
});

test('select Ref works', () => {
  function TestComponent() {
    const [value, setValue] = useState('');
    const selectRef = useRef<HTMLSelectElement | null>(null);
    return (
      <>
        <Select
          ref={selectRef}
          data-testid="select"
          name="select"
          options={options}
          value={value}
          onChange={setValue}
        />
        <p data-testid="test-ref">{value}</p>
      </>
    );
  }
  render(<TestComponent />);

  fireEvent.change(screen.getByTestId('select'), {
    target: { value: 'value_1' },
  });
  expect(screen.getByTestId('test-ref').innerHTML).toBe('value_1');
});

test('select has all (-) value', () => {
  render(
    <Select
      label="label-test"
      name="test"
      options={options}
      value={'123'}
      onChange={() => {}}
    />
  );
  expect(screen.getByText('-')).toBeInTheDocument();
});

test('select changing value', () => {
  function TestComponent() {
    const [value, setValue] = useState('');
    return (
      <>
        <Select
          data-testid="select"
          name="test"
          options={options}
          value={value}
          onChange={setValue}
        />
        <p data-testid="value">{value}</p>
      </>
    );
  }
  render(<TestComponent />);
  expect(screen.getByText('-')).toBeInTheDocument();
  expect(screen.getByText('label_1')).toBeInTheDocument();
  expect(screen.getByText('label_1')).toBeInTheDocument();

  fireEvent.change(screen.getByTestId('select'), {
    target: { value: 'value_1' },
  });
  fireEvent.change(screen.getByTestId('select'), {
    target: { value: 'value_2' },
  });
  expect(screen.getByTestId('value').innerHTML).toBe('value_2');
});
