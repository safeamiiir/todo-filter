import React from 'react';

import { ListType } from 'types/requests.interface';
import { COMPLETED_STATES } from 'constant';

interface DataTableProps {
  head: Array<string>;
  data: Array<ListType>;
  filter?: string;
  completed?: COMPLETED_STATES;
}

function DataTable({ head, data, filter, completed }: DataTableProps) {
  const handleSearch = (item: ListType) =>
    !filter?.trim() || item.title.includes(filter.trim());

  const handleCompleted = (item: ListType) =>
    !completed ||
    completed === COMPLETED_STATES.ALL ||
    (item.completed ? COMPLETED_STATES.YES : COMPLETED_STATES.NO) === completed;

  return (
    <div>
      <table>
        <thead>
          <tr>
            {head.map((item, index) => (
              <th key={`${item}${index}`}>{item}</th>
            ))}
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
                  {todo.completed ? COMPLETED_STATES.YES : COMPLETED_STATES.NO}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
