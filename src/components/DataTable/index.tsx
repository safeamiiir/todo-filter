import React, { useEffect } from 'react';

import { useRequest } from 'hooks/useRequest';
import { FETCH_STATES, LOADING, TABLE_HEADS } from 'constant';
import requests from 'api/endpoints';

function DataTable() {
  const { status, data } = useRequest(requests.getTodos);

  useEffect(() => {
    console.log(`data`, data);
  }, [data]);

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
        LOADING
      )}
    </div>
  );
}

export default DataTable;
