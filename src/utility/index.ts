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
