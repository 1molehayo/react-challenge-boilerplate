import styled from 'styled-components';
// import { fontSizes } from 'styles/global/Constants';

const StyledCheckbox = styled.label`
  display: inline-block;
  vertical-align: middle;
  white-space: nowrap;

  &:hover,
  &:focus {
    outline: none !important;
    box-shadow: none !important;
    cursor: pointer;
  }

  span {
    margin-left: 5px;
    vertical-align: middle;
  }

  input[type='checkbox'] {
    display: inline-block;
    vertical-align: middle;
  }
`;

export default StyledCheckbox;
