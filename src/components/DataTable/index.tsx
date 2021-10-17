import React from 'react';
import styled from 'styled-components';

import { ListType } from 'types/requests.interface';
import { COMPLETED_STATES } from 'constant';
import { COLORS } from 'theme';

const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
`;

const Thead = styled.thead`
  padding: 4px 8px;
  background-color: ${COLORS.gray}; ;
`;

const Th = styled.th`
  padding: 4px 8px;
`;

const Tr = styled.tr`
  border: 1px solid ${COLORS.gray};
`;

const TableData = styled.td`
  padding: 4px 8px;
  border: 1px solid ${COLORS.gray}; ;
`;
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
    <Table>
      <Thead>
        <Tr>
          {head.map((item, index) => (
            <Th key={`${item}${index}`}>{item}</Th>
          ))}
        </Tr>
      </Thead>
      <tbody>
        {data
          ?.filter(handleSearch)
          .filter(handleCompleted)
          .map((todo, index) => (
            <Tr key={todo.id}>
              <TableData>{index + 1}</TableData>
              <TableData>{todo.title}</TableData>
              <TableData>
                {todo.completed ? COMPLETED_STATES.YES : COMPLETED_STATES.NO}
              </TableData>
            </Tr>
          ))}
      </tbody>
    </Table>
  );
}

export default DataTable;
