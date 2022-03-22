import styled from 'styled-components';
import { fontSizes } from 'styles/global/Constants';

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 2rem 2rem 0;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.05);
  height: auto;
`;

export const CardRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  flex-wrap: wrap;
`;

export const CardHeader = styled.div`
  display: inline-flex;
  align-items: center;
  margin-bottom: 2rem;

  h5 {
    font-size: ${fontSizes.medium};
    margin-bottom: 0;
    color: ${({ theme }) => theme.colors.black};
  }

  span {
    margin-right: 5px;
    vertical-align: middle;
  }
`;

export const CardBody = styled.div``;
