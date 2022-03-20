import Icon from 'components/icon';
import React from 'react';
import { colors } from 'styles/global/Constants';
import {
  SearchDivider,
  SearchInner,
  SearchInput,
  SearchSelect,
  SearchWrapper
} from './SearchBar.styled';

const SearchBar = () => {
  return (
    <SearchWrapper>
      <SearchInner>
        <SearchInput>
          <span>
            <Icon icon="search" color={colors.black} size="20px" />
          </span>
          <input type="text" placeholder="Search by Your Reference" />
        </SearchInput>

        <SearchDivider />

        <SearchSelect>
          <label htmlFor="processor">Processor</label>
          <select name="processor" id="processor">
            <option value="all">All</option>
          </select>
        </SearchSelect>

        <SearchSelect>
          <label htmlFor="paymentMethod">Payment method</label>
          <select name="paymentMethod" id="paymentMethod">
            <option value="all">All</option>
          </select>
        </SearchSelect>

        <SearchSelect>
          <label htmlFor="currentStatus">Current status</label>
          <select name="currentStatus" id="currentStatus">
            <option value="all">All</option>
          </select>
        </SearchSelect>

        <SearchSelect>
          <label htmlFor="currency">Currency</label>
          <select name="currency" id="currency">
            <option value="all">All</option>
          </select>
        </SearchSelect>
      </SearchInner>
    </SearchWrapper>
  );
};

export default SearchBar;
