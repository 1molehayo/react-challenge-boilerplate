import Button from 'components/button';
import Dropdown from 'components/dropdown';
import Icon from 'components/icon';
import React, { MutableRefObject, useCallback, useRef, useState } from 'react';
import debounce from 'services/debounce';
import { colors } from 'styles/global/Constants';
import { removeEmptyArrayValues, removeEmptyObjValues } from 'utility';
import {
  FilterTitle,
  SearchDivider,
  SearchFooter,
  SearchInner,
  SearchInput,
  SearchSelect,
  SearchTitle,
  SearchWrapper
} from './SearchBar.styled';

interface IFilter {
  currency_code?: string[] | null;
  order_id?: string | null;
  payment_instrument_type?: string[] | null;
  processor?: string[] | null;
  status?: string[] | null;
}
interface IProps {
  onFilter: (parameters: IFilter) => void;
  showFilter: boolean;
  toggleFilter: () => void;
}

const SearchBar: React.FC<IProps> = ({
  onFilter,
  showFilter,
  toggleFilter
}) => {
  const [currencyCode, setCurrencycode] = useState<string[]>([]);
  const [paymentMethod, setPaymentMethod] = useState<string[]>([]);
  const [processor, setProcessor] = useState<string[]>([]);
  const [status, setStatus] = useState<string[]>([]);
  const searchRef = useRef() as MutableRefObject<HTMLInputElement>;

  const handleSearch = async (value?: any, key?: any, callback?: any) => {
    const filterValues: IFilter = {
      currency_code: removeEmptyArrayValues(currencyCode),
      order_id: searchRef.current.value,
      payment_instrument_type: removeEmptyArrayValues(paymentMethod),
      processor: removeEmptyArrayValues(processor),
      status: removeEmptyArrayValues(status)
    };

    const obj: any = { ...filterValues };

    obj[key] = removeEmptyArrayValues(value);

    const result = removeEmptyObjValues(obj);

    console.log('obj: ', obj);
    console.log('result: ', result);

    await onFilter(result);

    callback();
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedCallback = useCallback(debounce(handleSearch), []);

  return (
    <SearchWrapper showFilter={showFilter}>
      <SearchInner>
        <FilterTitle>Filter</FilterTitle>

        <SearchInput>
          <span>
            <Icon icon="search" color={colors.black} size="20px" />
          </span>
          <input
            type="text"
            ref={searchRef}
            placeholder="Search by Your Reference"
            onChange={debouncedCallback}
          />
        </SearchInput>

        <SearchDivider />

        <SearchSelect>
          <SearchTitle>Processor</SearchTitle>
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
            setSelection={(e: any) =>
              debouncedCallback(e, 'processor', () => {
                setProcessor(e);
              })
            }
            selection={processor}
            multiSelect
          />
        </SearchSelect>

        <SearchSelect>
          <SearchTitle>Payment method</SearchTitle>
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
            setSelection={(e: any) =>
              debouncedCallback(e, 'paymentMethod', () => {
                setPaymentMethod(e);
              })
            }
            selection={paymentMethod}
            multiSelect
          />
        </SearchSelect>

        <SearchSelect>
          <SearchTitle>Current status</SearchTitle>
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
            setSelection={(e: any) =>
              debouncedCallback(e, 'status', () => {
                setStatus(e);
              })
            }
            selection={status}
            multiSelect
          />
        </SearchSelect>

        <SearchSelect>
          <SearchTitle>Currency</SearchTitle>
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
            setSelection={(e: any) =>
              debouncedCallback(e, 'currencyCode', () => {
                setCurrencycode(e);
              })
            }
            selection={currencyCode}
            multiSelect
          />
        </SearchSelect>

        <SearchFooter>
          <Button onClick={toggleFilter}>Done</Button>
        </SearchFooter>
      </SearchInner>
    </SearchWrapper>
  );
};

export default SearchBar;
