import React, { useState, useEffect } from 'react';
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
  NO_RESULT,
  TABLE_HEADS,
  TODOS,
} from 'constant';
import { handleCompleted, handleSearch } from 'helper';
import { COLORS } from 'theme';

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

const NoResult = styled.div`
  color: ${COLORS.white};
  background-color: ${COLORS.red};
  padding: 8px;
  border-radius: 4px;
`;

function HomePage() {
  const { status, data } = useRequest(requests.getTodos);

  const [searchedText, setSearchedText] = useState('');

  const [completed, setCompleted] = useState(COMPLETED_STATES.ALL);

  const [dataItems, setDataItems] = useState(data);

  useEffect(() => {
    if (data) {
      setDataItems(
        data
          .filter((item) => handleSearch(item, searchedText))
          .filter((item) => handleCompleted(item, completed))
      );
    }
  }, [data, searchedText, completed]);

  return (
    <div>
      <header>
        <h1>{TODOS}</h1>
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
        {!dataItems?.length && status === FETCH_STATES.COMPLETE ? (
          <NoResult>{NO_RESULT}</NoResult>
        ) : dataItems && status === FETCH_STATES.COMPLETE ? (
          <DataTable head={Object.values(TABLE_HEADS)} data={dataItems} />
        ) : (
          LOADING
        )}
      </main>
    </div>
  );
}

export default HomePage;
