import styled from 'styled-components';

export const Page = styled.main`
  position: relative;
  min-height: calc(100vh - 150px);
  padding: 3rem 0;
  background-color: ${({ theme }) => theme.colors.light_grey};
`;
