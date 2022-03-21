import styled from 'styled-components';
import { fontSizes } from 'styles/global/Constants';

export const StyledDropdown = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: auto;
`;

export const DropdownHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  width: 100%;
  cursor: pointer;

  &:active,
  &:focus {
    outline: none;
    box-shadow: none;
  }

  p {
    font-size: ${fontSizes.small};
    font-weight: 400;
    color: ${({ theme }) => theme.colors.blue};
    margin-bottom: 0;
  }
`;

export const DropdownIcon = styled.span``;

export const DropdownList = styled.ul`
  z-index: 5;
  position: absolute;
  top: 100%;
  margin: 0;
  outline: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  padding: 4px 0;
  width: auto;
  min-width: 150px;
  max-height: 300px;
  overflow-y: auto;
  background-clip: padding-box;
  background-color: ${({ theme }) => theme.colors.white};
  list-style-type: none;
  font-size: ${fontSizes.small};

  li {
    color: rgba(0, 0, 0, 0.65);

    label {
      white-space: nowrap;
    }

    button {
      display: inline-flex;
      justify-content: space-between;
      border: 0;
      padding: 5px 12px;
      width: 100%;
      background-color: ${({ theme }) => theme.colors.white};
      text-align: left;
      line-height: 22px;
      font-size: ${fontSizes.small};

      &:hover,
      &:focus {
        outline: none !important;
        box-shadow: none !important;
        background-color: ${({ theme }) => theme.colors.primary};
        cursor: pointer;
      }
    }
  }
`;

export const SelectedPill = styled.div`
  position: absolute;
  top: 50%;
  right: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  padding: 5px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  transform: translateY(-50%);
  font-size: ${fontSizes.xsmall};
`;
