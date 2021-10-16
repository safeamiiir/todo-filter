import React, { useEffect } from 'react';

import { FETCH_STATES } from 'constant';
import { useRequest } from 'hooks/useRequest';
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
