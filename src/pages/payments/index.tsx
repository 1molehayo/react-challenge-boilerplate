import React, { useEffect, useState } from 'react';
import Layout from 'layouts';
import moment from 'moment';
import { Container } from 'styles/Container.styled';
import StyledHeading from 'styles/typography/Heading.styled';
import Table from 'components/table';
import Status from 'components/status';
import { Amount, Currency, Processor, StyledPayments } from './Payments.styled';
import axios from 'services/axios';
import Icon from 'components/icon';
import { colors } from 'styles/global/Constants';
import PaymentModel from 'models/payment';
import { formatPrice } from 'utility';
import { Link } from 'react-router-dom';
import SearchBar from 'components/search-bar';

function Payments() {
  const [paymentData, setPaymentData] = useState<PaymentModel[]>([]);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const { data } = await axios.get('/payments');
        console.log(data);
        setPaymentData(data.data);
      } catch (error) {
        console.log(error);
      }
    };

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
      <Container>
        <StyledHeading>Transactions</StyledHeading>

        <SearchBar />

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
                <Link to={`/payment-details/${item.orderId}`}>
                  <Icon icon="angle-right" size="20px" color={colors.blue} />
                </Link>
              </td>
            </tr>
          ))}
        </Table>
      </Container>
    </StyledPayments>
  );
}

export default Layout(Payments);
