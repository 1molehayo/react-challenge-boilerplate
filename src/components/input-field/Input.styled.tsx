import styled from 'styled-components';
import { fontSizes } from 'styles/global/Constants';

const StyledInput = styled.div`
  margin-bottom: 2.4rem;

  label {
    font-size: ${fontSizes.small};
    color: ${({ theme }) => theme.colors.black};
  }

  input {
    display: block;
    width: 100%;
    height: 4.5rem;
    padding: 0.8rem;
    border-radius: 3px;
    font-size: ${fontSizes.regular};
    border: 1px solid #dbdbdb;
  }
`;

export default StyledInput;
