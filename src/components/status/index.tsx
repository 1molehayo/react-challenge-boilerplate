import React from 'react';
import StyledStatus from './Status.styled';

interface IStatus {
  type: string;
}

const Status: React.FC<IStatus> = ({ type }) => {
  const getColor = (value: string) => {
    switch (value) {
      case 'AUTHORIZED':
        return '#288c33';

      case 'CANCELLED':
        return '#ae9e13';

      case 'DECLINED':
        return '#b60414';

      case 'FAILED':
        return '#b0303b';

      case 'SETTLED':
        return '#288c70';

      default:
        return '#6e6e6e';
    }
  };

  return <StyledStatus color={getColor(type)}>{type}</StyledStatus>;
};

export default Status;
