import React from 'react';

import { useRequest } from 'hooks/useRequest';
import { COMPLETED_STATES, FETCH_STATES, LOADING, TABLE_HEADS } from 'constant';
import requests from 'api/endpoints';

interface DataTableProps {
  filter?: string;
  completed?: COMPLETED_STATES;
}

function DataTable({ filter, completed }: DataTableProps) {
  const { status, data } = useRequest(requests.getTodos);

  const handleSearch = (item) =>
    !filter?.trim() || item.title.includes(filter.trim());

  const handleCompleted = (item) =>
    completed === COMPLETED_STATES.ALL ||
    (item.completed ? COMPLETED_STATES.YES : COMPLETED_STATES.NO) === completed;

  return (
    <div>
      {status === FETCH_STATES.COMPLETE ? (
        <table>
          <thead>
            <tr>
              <th>{TABLE_HEADS.INDEX}</th>
              <th>{TABLE_HEADS.TITLE}</th>
              <th>{TABLE_HEADS.COMPLETED}</th>
            </tr>
          </thead>
          <tbody>
            {data
              ?.filter(handleSearch)
              .filter(handleCompleted)
              .map((todo, index) => (
                <tr key={todo.id}>
                  <td>{index}</td>
                  <td>{todo.title}</td>
                  <td>
                    {todo.completed
                      ? COMPLETED_STATES.YES
                      : COMPLETED_STATES.NO}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      ) : (
        LOADING
      )}
    </div>
  );
}

export default DataTable;
