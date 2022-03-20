import styled from 'styled-components';
import { fontSizes } from 'styles/global/Constants';

export const TableWrapper = styled.div`
  width: 100%;
`;

export const StyledTable = styled.table`
  width: 100%;
  margin-top: 4rem;
  border-spacing: 0;
  border-collapse: collapse;

  th {
    text-align: left;
  }

  tbody tr {
    display: table-row;
    padding-bottom: 0;
    background: transparent;
    box-shadow: none;
    margin: 0;

    &:nth-of-type(even) {
      background-color: ${({ theme }) => theme.colors.light_grey};
    }

    td {
      width: auto;
      border-bottom: 1px solid ${({ theme }) => theme.colors.light_grey};
      cursor: pointer;
      display: table-cell;
      padding: 1.5rem 2.4rem;
      transition: background 0.2s ease-out;
      vertical-align: middle;
      font-size: ${fontSizes.small};
      color: ${({ theme }) => theme.colors.black};
      background-color: ${({ theme }) => theme.colors.white};

      &:after {
        display: none;
      }
      &:before {
        content: '';
      }
    }

    &:first-child {
      td {
        &:first-child {
          border-top-left-radius: 10px;
        }

        &:last-child {
          border-top-right-radius: 10px;
        }
      }
    }

    &:last-child {
      td {
        border-bottom: none;

        &:first-child {
          border-bottom-left-radius: 10px;
        }

        &:last-child {
          border-bottom-right-radius: 10px;
        }
      }
    }
  }
`;
