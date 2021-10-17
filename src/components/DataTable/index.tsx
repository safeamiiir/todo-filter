import React from 'react';
import styled from 'styled-components';

import { ListType } from 'types/requests.interface';
import { COMPLETED_STATES } from 'constant';
import { COLORS, SIZES } from 'theme';

const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
`;

const Thead = styled.thead`
  padding: ${SIZES[1]} ${SIZES[2]};
  background-color: ${COLORS.gray}; ;
`;

const Th = styled.th`
  padding: ${SIZES[1]} ${SIZES[2]};
`;

const Tr = styled.tr`
  border: ${SIZES[0]} solid ${COLORS.gray};
`;

const TableData = styled.td`
  padding: ${SIZES[1]} ${SIZES[2]};
  border: ${SIZES[0]} solid ${COLORS.gray}; ;
`;
interface DataTableProps {
  head: Array<string>;
  data: Array<ListType>;
}

function DataTable({ head, data }: DataTableProps) {
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
        {data.map((todo, index) => (
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
