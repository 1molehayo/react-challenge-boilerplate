import { Card } from 'components/card/Card.styled';
import styled from 'styled-components';
import { device } from 'styles/global/Device';

export const ProfileHeader = styled.div`
  width: 100%;
`;

export const ProfileBody = styled.div`
  width: 100%;
`;

export const ProfileColumn = styled.div`
  margin-bottom: 2rem;
`;

export const ProfileCard = styled(Card)`
  flex: 0 0 100%;
  width: 100%;

  @media ${device.medium} {
    flex: 0 0 calc(50% - 1rem);
    width: 50%;
  }
`;
