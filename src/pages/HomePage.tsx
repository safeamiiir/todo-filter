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
import { COLORS, SIZES } from 'theme';
import { ListType } from 'types/requests.interface';

const Features = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: ${SIZES[4]};
  > * {
    margin: ${SIZES[1]} ${SIZES[2]};
    flex: 1;
  }
`;

const NoResult = styled.div`
  color: ${COLORS.white};
  background-color: ${COLORS.red};
  padding: ${SIZES[2]};
  border-radius: ${SIZES[1]};
`;

function HomePage() {
  const { status, data } = useRequest(requests.getTodos);

  const [searchedText, setSearchedText] = useState('');

  const [completed, setCompleted] = useState(COMPLETED_STATES.ALL);

  const [dataItems, setDataItems] = useState<Array<ListType> | null>(null);

  const hasData = dataItems?.length && status === FETCH_STATES.COMPLETE;

  const noResult = dataItems && status === FETCH_STATES.COMPLETE;

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
        {hasData ? (
          <DataTable head={Object.values(TABLE_HEADS)} data={dataItems} />
        ) : noResult ? (
          <NoResult>{NO_RESULT}</NoResult>
        ) : (
          LOADING
        )}
      </main>
    </div>
  );
}

export default HomePage;
