import React, { useState } from 'react';
import styled from 'styled-components';

import requests from 'api/endpoints';
import { useRequest } from 'hooks/useRequest';
import DataTable from 'components/DataTable';
import Input from 'components/Input';
import Select from 'components/Select';
import {
  COMPLETED_OPTIONS,
  COMPLETED_STATES,
  FETCH_STATES,
  LOADING,
  TABLE_HEADS,
} from 'constant';

const Features = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 16px;
  > * {
    margin: 4px 8px;
    flex: 1;
  }
`;

function HomePage() {
  const { status, data } = useRequest(requests.getTodos);

  const [searchedText, setSearchedText] = useState('');

  const [completed, setCompleted] = useState(COMPLETED_STATES.ALL);

  return (
    <div>
      <header>
        <h1>Todos</h1>
      </header>
      <main>
        <Features>
          <Input
            name="search"
            label="Search"
            type="text"
            placeholder="keyword..."
            value={searchedText}
            onChange={setSearchedText}
          />
          <Select
            name="completed"
            label="Completed"
            options={COMPLETED_OPTIONS}
            value={completed}
            onChange={setCompleted}
          />
        </Features>
        {data && status === FETCH_STATES.COMPLETE ? (
          <DataTable
            head={Object.values(TABLE_HEADS)}
            data={data}
            filter={searchedText}
            completed={completed}
          />
        ) : (
          LOADING
        )}
      </main>
    </div>
  );
}

export default HomePage;
