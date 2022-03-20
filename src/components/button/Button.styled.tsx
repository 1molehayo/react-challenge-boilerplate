import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0px 1.8rem;
  width: 100%;
  height: 48px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.primary};
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: rgb(0, 0, 0);
  font-family: Aeonik, sans-serif;
  font-size: 18px;
  line-height: 28px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  box-shadow: rgb(191 191 191 / 80%) 0px 1px 6px 0px;
  transition: box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:focus {
    outline: none;
    box-shadow: rgb(255 153 133 / 35%) 0px 0px 0px 6px;
  }

  &:hover {
    box-shadow: rgb(255 153 133 / 35%) 0px 0px 0px 6px;
  }

  &:disabled {
    opacity: 0.8;
  }

  span {
    flex-grow: 1;
    text-align: center;
  }
`;

export default StyledButton;
