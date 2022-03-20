import styled from 'styled-components';
import { fontSizes } from 'styles/global/Constants';

export const SearchWrapper = styled.div`
  display: flex;
  justify-items: flex-end;
  width: 100%;
`;

export const SearchInner = styled.div`
  display: inline-flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 50px;
  padding: 1rem 3rem;
  width: auto;
  margin-left: auto;
  margin-bottom: 3rem;
`;

export const SearchInput = styled.div`
  position: relative;

  span {
    position: absolute;
    top: 50%;
    left: 0;
    width: 30px;
    height: 30px;
    transform: translateY(-40%);
  }

  input[type='text'] {
    display: inline-block;
    background: transparent;
    padding-left: 30px;
    font-size: ${fontSizes.small};
    border: 0;
    outline: none;
    box-shadow: none;
    color: ${({ theme }) => theme.colors.black};

    &:focus,
    &:hover {
      outline: none;
      box-shadow: none;
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.black};
    }
  }
`;

export const SearchSelect = styled.div`
  display: flex;
  align-items: center;

  label {
    font-size: ${fontSizes.small};
    color: ${({ theme }) => theme.colors.black};
    margin-right: 0.6rem;
  }

  select {
    display: inline-block;
    font-size: ${fontSizes.small};
    color: ${({ theme }) => theme.colors.blue};
    border: 0;
    outline: none;
    box-shadow: none;

    &:focus,
    &:hover {
      outline: none;
      box-shadow: none;
    }
  }

  &:not(:last-child) {
    margin-right: 2rem;
  }
`;

export const SearchDivider = styled.div`
  width: 1px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.light_grey};
  margin: 0 2rem;
`;
