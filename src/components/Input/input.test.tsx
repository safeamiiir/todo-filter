import React, { useState, useRef } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Input from 'components/Input';

test('input label is set', () => {
  render(
    <Input
      label="label-test"
      name="test"
      type="text"
      value={'123'}
      onChange={() => {}}
    />
  );
  const label = screen.getByText(/label-test/i);
  expect(label).toBeInTheDocument();
});

test('input type=number works', () => {
  function TestComponent() {
    const [value, setValue] = useState('');
    return (
      <Input
        data-testid="test"
        name="test"
        type="number"
        value={value}
        onChange={setValue}
      />
    );
  }
  render(<TestComponent />);

  // write Alphabet
  userEvent.type(screen.getByTestId('test'), 'abcd');
  expect(screen.getByTestId('test')).toHaveValue(null);

  // then write Number
  userEvent.type(screen.getByTestId('test'), '123');
  expect(screen.getByTestId('test')).toHaveValue(123);
});

test('input Ref works', () => {
  function TestComponent() {
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement | null>(null);
    return (
      <>
        <Input
          ref={inputRef}
          name="test"
          type="text"
          value={value}
          onChange={setValue}
        />
        <p data-testid="test-ref">{value}</p>
      </>
    );
  }
  render(<TestComponent />);

  userEvent.type(screen.getByRole('textbox'), 'abcd');
  expect(screen.getByTestId('test-ref').innerHTML).toBe('abcd');
});

test('input changing value', () => {
  function TestComponent() {
    const [value, setValue] = useState('');
    return <Input name="test" type="text" value={value} onChange={setValue} />;
  }
  render(<TestComponent />);
  userEvent.type(screen.getByRole('textbox'), 'This is some Text');
  expect(screen.getByRole('textbox')).toHaveValue('This is some Text');

  userEvent.type(screen.getByRole('textbox'), ' Added some'); // space is important before first word
  expect(screen.getByRole('textbox')).toHaveValue(
    'This is some Text Added some'
  );
});
