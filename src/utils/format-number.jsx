export const formatNumber = (number) => {
  const value = new Intl.NumberFormat("en-IN", {
    maximumSignificantDigits: 3,
  }).format(number);
  return value;
};
