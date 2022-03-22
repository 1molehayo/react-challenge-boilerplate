import React, { useEffect, useState } from 'react';
import Layout from 'layouts';
import moment from 'moment';
import { Container, Grid } from 'styles/Container.styled';
import {
  AmountColumn,
  AmountRow,
  Block,
  HeaderLink,
  OverviewItem,
  OverviewStatus,
  OverviewText,
  PaymentCard,
  PaymentDetailsHeader,
  PaymentOverview,
  SmallHeading,
  StyledPaymentDetails
} from './PaymentDetails.styled';
import Loader from 'components/loader';
import PaymentModel, { PaymentModelDefaults } from 'models/payment';
import axios, { handleError } from 'services/axios';
import { notify } from 'utility/toaster';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Icon from 'components/icon';
import {
  Card,
  CardBody,
  CardHeader,
  CardRow
} from 'components/card/Card.styled';
import StyledParagraph from 'styles/typography/Paragraph.styled';
import Status from 'components/status';
import { colors } from 'styles/global/Constants';
import {
  formatCharLength,
  formatPrice,
  getCurrencySign,
  getPaymentMethod
} from 'utility';

function PaymentDetails() {
  const [paymentDetails, setPaymentDetails] =
    useState<PaymentModel>(PaymentModelDefaults);

  const {
    amount,
    amountCaptured,
    amountRefunded,
    currencyCode,
    date,
    orderId,
    paymentInstrument,
    processor,
    processorMerchantId,
    status
  } = paymentDetails;

  const { paymentInstrumentData, threeDSecureAuthentication } =
    paymentInstrument;

  const { last4Digits, cardholderName, expirationMonth, expirationYear } =
    paymentInstrumentData;

  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchPaymentDetails = async () => {
    setLoading(true);

    try {
      const { data } = await axios.get(`/payments/${id}`);
      setPaymentDetails(data);
    } catch (err) {
      const errorMessage = handleError(err);

      notify({
        type: 'error',
        message: errorMessage
      });

      navigate('/404');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPaymentDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledPaymentDetails>
      {loading && <Loader />}

      {paymentDetails && (
        <Container>
          <PaymentDetailsHeader>
            <HeaderLink>
              <Link to="/">
                <Icon icon="arrow-left" size="15px" />
                <span>Transactions</span>
              </Link>
            </HeaderLink>

            <AmountRow>
              <h5>
                {getCurrencySign(currencyCode)}
                {formatPrice(amount)}
              </h5>

              <AmountColumn>
                <SmallHeading>Refund</SmallHeading>
                <p>
                  {getCurrencySign(currencyCode)}
                  {formatPrice(amountRefunded)}
                </p>
              </AmountColumn>

              <AmountColumn>
                <SmallHeading>Final</SmallHeading>
                <p>
                  {getCurrencySign(currencyCode)}
                  {formatPrice(amountCaptured)}
                </p>
              </AmountColumn>
            </AmountRow>
          </PaymentDetailsHeader>

          <PaymentOverview>
            <Card>
              <CardRow>
                <OverviewItem>
                  <SmallHeading>Currency</SmallHeading>
                  <StyledParagraph>{currencyCode}</StyledParagraph>
                </OverviewItem>

                <OverviewItem>
                  <SmallHeading>Processor</SmallHeading>

                  <span>
                    <Icon icon={processor.toLowerCase()} />
                    <OverviewText>{processor.toLowerCase()}</OverviewText>
                  </span>
                </OverviewItem>

                <OverviewItem>
                  <SmallHeading>Payment Method</SmallHeading>
                  {processor !== 'PAYPAL' ? (
                    <span>
                      <Icon icon={getPaymentMethod(paymentDetails)} />
                      <OverviewText>
                        Card / {getPaymentMethod(paymentDetails)}
                      </OverviewText>
                    </span>
                  ) : (
                    <span>
                      <Icon icon="paypal" />
                      <OverviewText>Paypal</OverviewText>
                    </span>
                  )}
                </OverviewItem>

                <OverviewItem>
                  <SmallHeading>Your Reference</SmallHeading>
                  <StyledParagraph>
                    {formatCharLength(orderId, 20)}
                  </StyledParagraph>
                </OverviewItem>

                <OverviewItem>
                  <SmallHeading>Submitted</SmallHeading>
                  <StyledParagraph>
                    {moment(date).format('D MMM YYYY, HH:mm')}
                  </StyledParagraph>
                </OverviewItem>

                <OverviewItem>
                  <OverviewStatus>
                    <Status type={status} />
                  </OverviewStatus>
                </OverviewItem>
              </CardRow>
            </Card>
          </PaymentOverview>

          <Grid>
            <PaymentCard>
              <CardHeader>
                <span>
                  <Icon icon={processor.toLowerCase()} />
                </span>

                <h5>Processor</h5>
              </CardHeader>

              <CardBody>
                <Block>
                  <SmallHeading>Account ID</SmallHeading>
                  <StyledParagraph>{processorMerchantId}</StyledParagraph>
                </Block>

                <Block>
                  <SmallHeading>Transaction ID</SmallHeading>
                  <StyledParagraph style={{ color: colors.blue }}>
                    pi_1Hw7GKGZqNWFwi8cG9akWRHi
                  </StyledParagraph>
                </Block>
              </CardBody>
            </PaymentCard>

            <PaymentCard>
              <CardHeader>
                <span>
                  {processor !== 'PAYPAL' ? (
                    <Icon icon={getPaymentMethod(paymentDetails)} />
                  ) : (
                    <Icon icon="paypal" />
                  )}
                </span>

                <h5>Payment Method</h5>
              </CardHeader>

              <CardBody>
                <Block>
                  <SmallHeading>Cardholder Name</SmallHeading>
                  <StyledParagraph>{cardholderName || 'N/A'}</StyledParagraph>
                </Block>

                <Grid>
                  <Block>
                    <SmallHeading>Card Number</SmallHeading>
                    <StyledParagraph>
                      {last4Digits ? `**** **** **** ${last4Digits}` : 'N/A'}
                    </StyledParagraph>
                  </Block>

                  <Block>
                    <SmallHeading>Expiration</SmallHeading>
                    {expirationMonth && expirationYear ? (
                      <StyledParagraph>
                        {expirationMonth}/{expirationYear}
                      </StyledParagraph>
                    ) : (
                      <StyledParagraph>N/A</StyledParagraph>
                    )}
                  </Block>
                </Grid>
              </CardBody>
            </PaymentCard>

            <PaymentCard>
              <CardHeader>
                <span>
                  <Icon icon={processor.toLowerCase()} />
                </span>

                <h5>Risk Data</h5>
              </CardHeader>

              <CardBody>
                <Grid>
                  <Block>
                    <SmallHeading>CVV Response</SmallHeading>
                    <Status color="#288c70" type="Matched" />
                  </Block>

                  <Block>
                    <SmallHeading>Risk score</SmallHeading>
                    <StyledParagraph>28</StyledParagraph>
                  </Block>

                  <Block>
                    <SmallHeading>Risk level</SmallHeading>
                    <StyledParagraph>Normal</StyledParagraph>
                  </Block>
                </Grid>
              </CardBody>
            </PaymentCard>

            <PaymentCard>
              <CardHeader>
                <span>
                  <Icon icon="3ds" />
                </span>

                <h5>3DSecure</h5>
              </CardHeader>

              <CardBody>
                <Block>
                  <SmallHeading>Response</SmallHeading>
                  {threeDSecureAuthentication &&
                  threeDSecureAuthentication.responseCode ? (
                    <Status type={threeDSecureAuthentication.responseCode} />
                  ) : (
                    <StyledParagraph>N/A</StyledParagraph>
                  )}
                </Block>
              </CardBody>
            </PaymentCard>
          </Grid>
        </Container>
      )}
    </StyledPaymentDetails>
  );
}

export default Layout(PaymentDetails);
