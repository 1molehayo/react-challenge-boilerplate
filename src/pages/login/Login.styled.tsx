import styled from 'styled-components';

export const LoginWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.light_grey};
`;

export const LoginHeader = styled.header`
  position: relative;

  img {
    position: absolute;
    left: 36px;
    top: 30px;
  }
`;

export const LoginBody = styled.main`
  display: flex;
  align-items: center;
  width: 100%;
  height: calc(100vh - 70px);

  section {
    width: 100%;
  }

  h1 {
    margin-bottom: 4rem;
  }
`;

export const LoginForm = styled.div`
  max-width: 450px;
  margin: 0 auto;
  padding: 4rem;
  border-radius: 6px;
  border: 1px solid transparent;
  box-shadow: rgb(0 0 0 / 10%) 0px 3px 7px -1px;
  background-color: ${({ theme }) => theme.colors.white};

  button {
    margin-top: 4rem;
  }
`;
