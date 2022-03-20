// import { lighten } from 'polished';
import styled from 'styled-components';
import { fontSizes, fontWeights } from 'styles/global/Constants';

export const StyledPayments = styled.div`
  tbody tr {
    td:first-child {
      text-align: end;
      padding-right: 1.5rem;
      white-space: nowrap;
    }

    td:last-child {
      width: 30px;
    }

    &:hover {
      td {
        ${({ theme }) =>
          theme && {
            background: theme.colors.primary
          }}
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
