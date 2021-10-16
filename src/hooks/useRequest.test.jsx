import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { useRequest } from 'hooks/useRequest';
import { FETCH_STATES } from 'constant';
import { waitFor } from '@testing-library/dom';

function fetchMock(correctness) {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      if (correctness) {
        resolve('data fetched correctly');
      } else {
        reject('data fetched incorrectly');
      }
    }, 200 + Math.random() * 300)
  );
}

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('useRequest hook on successful fetch runs correctly', async () => {
  act(() => {
    render(<TestComponent promiseFn={() => fetchMock(true)} />, container);
  });
  expect(container.textContent).toBe('loading');

  await waitFor(() =>
    expect(container.textContent).toBe('data fetched correctly')
  );
});

it('useRequest hook on failed fetch runs correctly', async () => {
  act(() => {
    render(<TestComponent promiseFn={() => fetchMock(false)} />, container);
  });
  expect(container.textContent).toBe('loading');

  await waitFor(() => expect(container.textContent).toBe('error'));
});

function TestComponent({ promiseFn }) {
  const { data, status } = useRequest(promiseFn);
  if (status === FETCH_STATES.LOADING) {
    return <div>loading</div>;
  } else if (status === FETCH_STATES.ERROR) {
    return <div>error</div>;
  } else {
    return <div>{data}</div>;
  }
}
