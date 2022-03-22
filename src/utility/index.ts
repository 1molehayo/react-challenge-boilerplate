export const formatPrice = (val: number) => {
  const options = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  };

  return Number(val).toLocaleString('en', options);
};

export const isArrayEmpty = (arr: any) => !arr || arr.length === 0;

export const isObjectEmpty = (obj: any) => {
  for (const prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      return false;
    }
  }

  return true;
};

export const removeEmptyObjValues = (obj: any) => {
  const temp = { ...obj };

  Object.keys(temp).forEach((key) => {
    if (!temp[key]) {
      delete temp[key];
    }
  });

  return temp;
};

export const removeEmptyArrayValues = (arr: any) => {
  if (arr && Array.isArray(arr) && arr.length > 0) {
    return arr.filter((item) => !!item);
  }

  return null;
};

export const formatCharLength = (str?: string, len = 50, noElipsis = false) => {
  if (!str) {
    return '';
  }

  if (str.length > len) {
    if (noElipsis) {
      return str.substring(0, len - 1);
    }

    return `${str.substring(0, len - 1)}...`;
  }

  return str;
};

export const getCurrencySign = (currencyCode: string) => {
  if (currencyCode === 'EUR') {
    return `\u20ac`;
  }

  if (currencyCode === 'GBP') {
    return `\u00a3`;
  }

  if (currencyCode === 'USD') {
    return `\u0024`;
  }

  return currencyCode;
};

export const getPaymentMethod = (order: any): string => {
  let { network, binData } = order.paymentInstrument.paymentInstrumentData;
  network = network.replace(/_/g, '-');
  network = network.replace(/ /g, '-');

  if (network === 'other') {
    return 'payment-card';
  }

  return binData.network.toLowerCase();
};
