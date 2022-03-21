import Dropdown from 'components/dropdown';
import Icon from 'components/icon';
import React, { useCallback, useState } from 'react';
import debounce from 'services/debounce';
import { colors } from 'styles/global/Constants';
import { removeEmptyObjValues } from 'utility';
import {
  DropdownTitle,
  SearchDivider,
  SearchInner,
  SearchInput,
  SearchSelect,
  SearchWrapper
} from './SearchBar.styled';

interface IFilter {
  currency_code?: string[];
  order_id?: string;
  payment_instrument_type?: string[];
  processor?: string[];
  status?: string[];
}
interface IProps {
  onFilter: (parameters: IFilter) => void;
}

const SearchBar: React.FC<IProps> = ({ onFilter }) => {
  const [currencyCode, setCurrencycode] = useState<string[]>([]);
  const [paymentMethod, setPaymentMethod] = useState<string[]>([]);
  const [processor, setProcessor] = useState<string[]>([]);
  const [status, setStatus] = useState<string[]>([]);

  const handleSearch = (e: any) => {
    const filterValues: IFilter = {
      currency_code: currencyCode,
      order_id: e.target.value,
      payment_instrument_type: paymentMethod,
      processor,
      status
    };

    const result = removeEmptyObjValues(filterValues);

    onFilter(result);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedCallback = useCallback(debounce(handleSearch), []);

  return (
    <SearchWrapper>
      <SearchInner>
        <SearchInput>
          <span>
            <Icon icon="search" color={colors.black} size="20px" />
          </span>
          <input
            type="text"
            placeholder="Search by Your Reference"
            onChange={debouncedCallback}
          />
        </SearchInput>

        <SearchDivider />

        <SearchSelect>
          <DropdownTitle>Processor</DropdownTitle>
          <Dropdown
            title="All"
            items={[
              {
                label: 'All',
                value: ''
              },
              {
                label: 'Adyen',
                value: 'ADYEN'
              },
              {
                label: 'Braintree',
                value: 'BRAINTREE'
              },
              {
                label: 'Paypal',
                value: 'PAYPAL'
              },
              {
                label: 'Stripe',
                value: 'STRIPE'
              }
            ]}
            setSelection={(e: any) => setProcessor(e)}
            selection={processor}
            multiSelect
          />
        </SearchSelect>

        <SearchSelect>
          <DropdownTitle>Payment method</DropdownTitle>
          <Dropdown
            title="All"
            items={[
              {
                label: 'All',
                value: ''
              },
              {
                label: 'Apple pay',
                value: 'APPLE_PAY'
              },
              {
                label: 'Google pay',
                value: 'GOOGLE_PAY'
              },
              {
                label: 'Payment card',
                value: 'PAYMENT_CARD'
              }
            ]}
            setSelection={(e: any) => setProcessor(e)}
            selection={processor}
            multiSelect
          />
        </SearchSelect>

        <SearchSelect>
          <DropdownTitle>Current status</DropdownTitle>
          <Dropdown
            title="All"
            items={[
              {
                label: 'All',
                value: ''
              },
              {
                label: 'Authorized',
                value: 'AUTHORIZED'
              },
              {
                label: 'Cancelled',
                value: 'CANCELLED'
              },
              {
                label: 'Declined',
                value: 'DECLINED'
              },
              {
                label: 'Failed',
                value: 'FAILED'
              },
              {
                label: 'Pending',
                value: 'PENDING'
              },
              {
                label: 'Settled',
                value: 'SETTLED'
              }
            ]}
            setSelection={(e: any) => setStatus(e)}
            selection={status}
            multiSelect
          />
        </SearchSelect>

        <SearchSelect>
          <DropdownTitle>Currency</DropdownTitle>
          <Dropdown
            title="All"
            items={[
              {
                label: 'All',
                value: ''
              },
              {
                label: 'EUR',
                value: 'EUR'
              },
              {
                label: 'GBP',
                value: 'GBP'
              },
              {
                label: 'USD',
                value: 'USD'
              }
            ]}
            setSelection={(e: any) => setCurrencycode(e)}
            selection={currencyCode}
            multiSelect
          />
        </SearchSelect>
      </SearchInner>
    </SearchWrapper>
  );
};

export default SearchBar;
