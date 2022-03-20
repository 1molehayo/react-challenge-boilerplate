export const formatPrice = (val: number) => {
  const options = { 
    minimumFractionDigits: 2,
    maximumFractionDigits: 2 
  };
  
  return Number(val).toLocaleString('en', options);
}