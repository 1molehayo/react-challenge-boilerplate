import React, { useEffect, useState } from 'react';
import Layout from 'layouts';
import moment from 'moment';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import { Container } from 'styles/Container.styled';
import { colors } from 'styles/global/Constants';
import StyledHeading from 'styles/typography/Heading.styled';
import Table from 'components/table';
import Status from 'components/status';
import {
  Amount,
  Currency,
  PaymentBody,
  PaymentHeader,
  Processor,
  StyledPayments
} from './Payments.styled';
import axios, { handleError } from 'services/axios';
import Icon from 'components/icon';
import PaymentModel from 'models/payment';
import SearchBar from 'components/search-bar';
import Loader from 'components/loader';
import { formatPrice, getPaymentMethod } from 'utility';
import { notify } from 'utility/toaster';

function Payments() {
  const [paymentData, setPaymentData] = useState<PaymentModel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [showFilter, setShowFilter] = useState<boolean>(false);

  const toggleFilter = () => setShowFilter((prevState) => !prevState);
  const navigate = useNavigate();

  const fetchPayments = async (params?: any) => {
    setLoading(true);

    try {
      const { data } = await axios.get('/payments', {
        params,
        paramsSerializer: (params) => {
          return qs.stringify(params, { arrayFormat: 'brackets' });
        }
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

  return (
    <StyledPayments>
      <Container>
        <PaymentHeader>
          <StyledHeading>Transactions</StyledHeading>
          <span role="button" onClick={toggleFilter}>
            Filter <Icon icon="filter" size="16px" color={colors.black} />
          </span>
        </PaymentHeader>

        <SearchBar
          onFilter={(e) => fetchPayments(e)}
          showFilter={showFilter}
          toggleFilter={toggleFilter}
        />

        <PaymentBody>
          {loading && <Loader />}

          {!loading && (
            <Table>
              {paymentData.map((item, itemIndex) => (
                <tr
                  key={itemIndex}
                  onClick={() => navigate(`/payment-details/${item.id}`)}
                >
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
                    <Icon icon="angle-right" size="20px" color={colors.blue} />
                  </td>
                </tr>
              ))}
            </Table>
          )}
        </PaymentBody>
      </Container>
    </StyledPayments>
  );
}

export default Layout(Payments);
