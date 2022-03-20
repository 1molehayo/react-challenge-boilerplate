import React from 'react';
import { StyledTable, TableWrapper } from './Table.styled';

interface ITable {
  children: React.ReactNode;
  headers?: string[];
}

const Table: React.FC<ITable> = ({ headers, children }) => {
  return (
    <TableWrapper>
      <StyledTable>
        {/* <thead>
        <tr>
          {headers.map((headerItem: string, headerIndex: number) => (
            <th key={headerIndex}>{headerItem}</th>
          ))}
        </tr>
      </thead> */}

        <tbody>{children}</tbody>
      </StyledTable>
    </TableWrapper>
  );
};

export default Table;
