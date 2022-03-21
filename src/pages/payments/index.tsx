import React, { useEffect, useState } from 'react';
import Layout from 'layouts';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Container } from 'styles/Container.styled';
import { colors } from 'styles/global/Constants';
import StyledHeading from 'styles/typography/Heading.styled';
import Table from 'components/table';
import Status from 'components/status';
import { Amount, Currency, Processor, StyledPayments } from './Payments.styled';
import axios, { handleError } from 'services/axios';
import Icon from 'components/icon';
import PaymentModel from 'models/payment';
import SearchBar from 'components/search-bar';
import Loader from 'components/loader';
import { formatPrice } from 'utility';
import { notify } from 'utility/toaster';

function Payments() {
  const [paymentData, setPaymentData] = useState<PaymentModel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchPayments = async (params?: any) => {
    try {
      const { data } = await axios.get('/payments', {
        params
      });
      setPaymentData(data.data);
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
    fetchPayments();
  }, []);

  const getPaymentMethod = (order: any): string => {
    let network = order.paymentInstrument.paymentInstrumentData.network;
    network = network.replace(/_/g, '-');
    network = network.replace(/ /g, '-');

    if (network === 'other') {
      return 'payment-card';
    }

    return network.toLowerCase();
  };

  return (
    <StyledPayments>
      {loading && <Loader />}

      {!loading && (
        <Container>
          <StyledHeading>Transactions</StyledHeading>

          <SearchBar onFilter={(e) => fetchPayments(e)} />

          <Table>
            {paymentData.map((item, itemIndex) => (
              <tr key={itemIndex}>
                <td>
                  <Amount>{formatPrice(item.amount)}</Amount> &nbsp;
                  <Currency>{item.currencyCode}</Currency>
                </td>
                <td>
                  <Status type={item.status} />
                </td>
                <td>
                  <Processor>
                    <Icon icon={item.processor.toLowerCase()} />
                  </Processor>
                  {item.processor !== 'PAYPAL' && (
                    <Processor>
                      <Icon icon={getPaymentMethod(item)} />
                    </Processor>
                  )}
                </td>

                <td>{item.orderId}</td>
                <td>{moment(item.date).format('D MMM YYYY, HH:mm')}</td>
                <td>
                  <Link to={`/payment-details/${item.id}`}>
                    <Icon icon="angle-right" size="20px" color={colors.blue} />
                  </Link>
                </td>
              </tr>
            ))}
          </Table>
        </Container>
      )}
    </StyledPayments>
  );
}

export default Layout(Payments);
