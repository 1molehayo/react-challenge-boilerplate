import Icon from 'components/icon';
import React from 'react';
import { colors } from 'styles/global/Constants';
import StyledLoader from './Loader.styled';

const Loader = () => {
  return (
    <StyledLoader>
      <Icon icon="loader" size="60px" color={colors.primary} />
    </StyledLoader>
  );
};

export default Loader;
