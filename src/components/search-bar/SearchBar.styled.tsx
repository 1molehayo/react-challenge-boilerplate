// import { lighten } from 'polished';
import styled from 'styled-components';
import { fontSizes, fontWeights } from 'styles/global/Constants';
import { device } from 'styles/global/Device';

export const SearchWrapper = styled.div<{ showFilter: boolean }>`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  display: ${(props) => (props.showFilter ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.light_grey};

  @media ${device.medium} {
    position: static;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-items: flex-end;
    background-color: transparent;
  }
`;

export const SearchInner = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.light_grey};
  padding: 1rem 3rem 10rem;

  width: 100%;
  max-width: 500px;
  height: 90vh;
  margin-left: auto;
  margin-right: auto;

  @media ${device.medium} {
    display: inline-flex;
    align-items: center;
    width: auto;
    max-width: 100%;
    height: auto;
    margin-right: 0;
    border-radius: 50px;
    margin-bottom: 3rem;
    padding-bottom: 1rem;
  }
`;

export const SearchInput = styled.div`
  position: relative;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.light_grey};
  margin-bottom: 2rem;
  border-radius: 5px;

  @media ${device.medium} {
    padding: 0;
    border: 0;
    margin-bottom: 0;
  }

  span {
    position: absolute;
    top: 50%;
    left: 1rem;
    width: 30px;
    height: 30px;
    transform: translateY(-40%);

    @media ${device.medium} {
      left: 0;
    }
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
      color: ${({ theme }) => theme.colors.blue};
    }
  }
`;

export const SearchSelect = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;

  &:not(:last-child) {
    margin-right: 2rem;
  }

  @media ${device.medium} {
    margin-bottom: 0;
  }
`;

export const SearchTitle = styled.p`
  font-size: ${fontSizes.small};
  color: ${({ theme }) => theme.colors.black};
  margin-right: 0.6rem;
  margin-bottom: 0;
`;

export const SearchDivider = styled.div`
  display: none;
  width: 1px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.light_grey};
  margin: 0 2rem;

  @media ${device.medium} {
    display: block;
  }
`;

export const FilterTitle = styled.h3`
  font-size: ${fontSizes.medium};
  font-weight: ${fontWeights.bold};
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.black};

  @media ${device.medium} {
    display: none;
  }
`;

export const SearchFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;

  @media ${device.medium} {
    display: none;
  }

  button {
    width: auto;
    margin: 0 auto;
    padding-left: 3.5rem;
    padding-right: 3.5rem;
    font-size: ${fontSizes.small};
  }
`;
