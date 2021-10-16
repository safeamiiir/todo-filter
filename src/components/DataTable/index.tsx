import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Input from 'components/Input';
import Select from 'components/Select';
import { useRequest } from 'hooks/useRequest';
import { COMPLETED_OPTIONS, FETCH_STATES } from 'constant';
import requests from 'api/endpoints';

interface DataTableProps {
  hasSearch?: boolean;
  hasCategory?: boolean;
}

const Features = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function DataTable({ hasSearch, hasCategory }: DataTableProps) {
  const { status, data } = useRequest(requests.getTodos);
  const [searchedText, setSearchedText] = useState('');
  const [completed, setCompleted] = useState('');
  useEffect(() => {
    console.log(`data`, data);
  }, [data]);
  useEffect(() => {
    console.log(`searchedText`, searchedText);
  }, [searchedText]);
  useEffect(() => {
    console.log(`completed`, completed);
  }, [completed]);
  return (
    <div>
      <Features>
        {hasSearch && (
          <Input
            name="search"
            label="Search"
            type="text"
            placeholder="keyword..."
            value={searchedText}
            onChange={setSearchedText}
          />
        )}
        {hasCategory && (
          <Select
            name="completed"
            label="Completed"
            options={COMPLETED_OPTIONS}
            value={completed}
            onChange={setCompleted}
          />
        )}
      </Features>
      {status === FETCH_STATES.COMPLETE ? (
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((todo, index) => (
              <tr key={todo.id}>
                <td>{index}</td>
                <td>{todo.title}</td>
                <td>{todo.completed ? 'yes' : 'no'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        'L O A D I N G  . . .'
      )}
    </div>
  );
}

export default DataTable;
