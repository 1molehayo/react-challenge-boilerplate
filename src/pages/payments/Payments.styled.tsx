import styled from 'styled-components';
import { fontSizes, fontWeights } from 'styles/global/Constants';
import { device } from 'styles/global/Device';

export const StyledPayments = styled.div`
  position: relative;

  tbody tr {
    td:first-child {
      text-align: end;
      padding-right: 1.5rem;
      white-space: nowrap;
    }

    td:last-child {
      display: none;
      width: 30px;

      @media ${device.medium} {
        display: table-cell;
      }
    }

    td:nth-child(4) {
      display: none;

      @media ${device.large} {
        display: table-cell;
      }
    }

    td:nth-child(5) {
      display: none;

      @media ${device.medium} {
        display: table-cell;
      }
    }

    &:hover {
      td {
        ${({ theme }) =>
          theme && {
            background: theme.colors.primary
          }}
      }
    }

    &:first-child {
      td:nth-child(3) {
        border-top-right-radius: 10px;

        @media ${device.small} {
          border-top-right-radius: 0;
        }
      }
    }

    &:last-child {
      td:nth-child(3) {
        border-bottom-right-radius: 10px;

        @media ${device.small} {
          border-bottom-right-radius: 0;
        }
      }
    }
  }
`;

export const Processor = styled.span`
  display: inline-block;
  width: 40px;
  height: auto;

  svg {
    vertical-align: middle;
  }
`;

export const Amount = styled.span`
  display: inline;
  vertical-align: middle;
  font-size: ${fontSizes.regular};
  font-weight: ${fontWeights.medium};
`;

export const Currency = styled.span`
  display: inline;
  vertical-align: middle;
  font-size: ${fontSizes.small};
`;

export const PaymentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  h1 {
    margin-bottom: 0;
  }

  span {
    display: inline-block;
    color: ${({ theme }) => theme.colors.black};
    font-size: ${fontSizes.regular};
    font-weight: ${fontWeights.medium};
    cursor: pointer;

    @media ${device.medium} {
      display: none;
    }
  }
`;

export const PaymentBody = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`;
