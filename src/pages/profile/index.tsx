import { CardHeader } from 'components/card/Card.styled';
import Loader from 'components/loader';
import Layout from 'layouts';
import ProfileModel, { ProfileModelDefaults } from 'models/profile';
import React, { useEffect, useState } from 'react';
import axios, { handleError } from 'services/axios';
import { Container, Grid } from 'styles/Container.styled';
import StyledHeading, { SmallHeading } from 'styles/typography/Heading.styled';
import StyledParagraph from 'styles/typography/Paragraph.styled';
import { notify } from 'utility/toaster';
import {
  ProfileBody,
  ProfileCard,
  ProfileColumn,
  ProfileHeader
} from './Profile.styled';

function Profile() {
  const [userData, setUserData] = useState<ProfileModel>(ProfileModelDefaults);
  const [loading, setLoading] = useState<boolean>(true);
  const {
    accountRoles,
    email,
    firstName,
    lastName,
    mfaEnabled,
    primerAccountList,
    revoked
  } = userData;

  const fetchUserData = async (params?: any) => {
    setLoading(true);

    try {
      const { data } = await axios.get('/users/me');
      setUserData(data);
    } catch (err) {
      const errorMessage = handleError(err);

      notify({
        type: 'error',
        message: errorMessage
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <Container>
      <ProfileHeader>
        <StyledHeading>User Profile</StyledHeading>
      </ProfileHeader>

      {loading && <Loader />}

      {!loading && (
        <ProfileBody>
          <Grid>
            <ProfileCard>
              <CardHeader>
                <h5>Personal Data</h5>
              </CardHeader>

              <Grid>
                <ProfileColumn>
                  <SmallHeading>Full Name</SmallHeading>
                  <StyledParagraph>
                    {firstName} {lastName}
                  </StyledParagraph>
                </ProfileColumn>

                <ProfileColumn>
                  <SmallHeading>Email</SmallHeading>
                  <StyledParagraph>{email}</StyledParagraph>
                </ProfileColumn>
              </Grid>
            </ProfileCard>

            <ProfileCard>
              <CardHeader>
                <h5>Account Settings</h5>
              </CardHeader>

              <ProfileColumn>
                <SmallHeading>Roles</SmallHeading>
                <StyledParagraph>{accountRoles.join(', ')}</StyledParagraph>
              </ProfileColumn>

              <Grid>
                <ProfileColumn>
                  <SmallHeading>MFA</SmallHeading>
                  <StyledParagraph>{`${mfaEnabled}`}</StyledParagraph>
                </ProfileColumn>

                <ProfileColumn>
                  <SmallHeading>Active</SmallHeading>
                  <StyledParagraph>{`${!revoked}`}</StyledParagraph>
                </ProfileColumn>
              </Grid>
            </ProfileCard>

            {primerAccountList.map((item: any, index: number) => (
              <ProfileCard key={index}>
                <CardHeader>
                  <h5>{item.companyName}</h5>
                </CardHeader>

                <ProfileColumn>
                  <SmallHeading>Location</SmallHeading>
                  <StyledParagraph>
                    {item.companyLocation || 'N/A'}
                  </StyledParagraph>
                </ProfileColumn>

                <ProfileColumn>
                  <SmallHeading>Preffered Currency</SmallHeading>
                  <StyledParagraph>
                    {item.dashboardSettings?.preferredCurrency}
                  </StyledParagraph>
                </ProfileColumn>
              </ProfileCard>
            ))}
          </Grid>
        </ProfileBody>
      )}
    </Container>
  );
}

export default Layout(Profile);
