import { Card } from 'components/card/Card.styled';
import styled from 'styled-components';
import { fontSizes, fontWeights } from 'styles/global/Constants';
import { device } from 'styles/global/Device';

export const StyledPaymentDetails = styled.div``;

export const PaymentDetailsHeader = styled.div`
  margin-bottom: 1.5rem;
`;

export const HeaderLink = styled.div`
  margin-bottom: 2rem;

  a {
    display: inline-block;
    color: ${({ theme }) => theme.colors.blue};
    text-decoration: none;
  }

  span {
    font-size: ${fontSizes.regular};
    margin-left: 1rem;
    vertical-align: middle;
  }
`;

export const AmountRow = styled.div`
  display: flex;
  align-items: flex-end;
  letter-spacing: 1px;

  h5 {
    font-size: ${fontSizes.xlarge};
    line-height: 1;
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const AmountColumn = styled.div`
  margin-left: 2rem;

  h6 {
    margin-bottom: 0;
    letter-spacing: normal;
  }

  p {
    color: ${({ theme }) => theme.colors.grey};
  }
`;

export const PaymentOverview = styled.div`
  margin-bottom: 2rem;
`;

export const OverviewItem = styled.div`
  margin-bottom: 2rem;
  min-width: calc(50% - 4rem);

  @media ${device.medium} {
    min-width: auto;
  }

  &:not(:last-child) {
    margin-right: 4rem;
  }

  &:last-child {
    flex: 1;
  }

  h6 {
    color: ${({ theme }) => theme.colors.grey};
  }

  p {
    margin-bottom: 0;
  }
`;

export const OverviewStatus = styled.div`
  display: flex;
  justify-content: flex-end;

  span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 6rem;
    font-size: ${fontSizes.regular};
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

export const OverviewText = styled.span`
  font-weight: ${fontWeights.regular};
  font-size: ${fontSizes.regular};
  letter-spacing: 0.2px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.black};
  margin-left: 5px;
  vertical-align: middle;
  text-transform: capitalize;
`;

export const PaymentCard = styled(Card)`
  flex: 0 0 100%;
  width: 100%;

  @media ${device.medium} {
    flex: 0 0 calc(50% - 1rem);
    width: 50%;
  }
`;

export const Block = styled.div`
  margin-bottom: 2rem;
`;
