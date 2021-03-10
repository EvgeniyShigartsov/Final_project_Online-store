/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
export const checkPriceValues = (values) => {
  const result = {...values};
  for (const item in result) {
    if (item === 'minPrice' && (result[item] === null || result[item] === undefined)) {
      result[item] = 0;
    }
    if (item === 'maxPrice' && (result.minPrice === 0)
     && (result[item] === null || result[item] === undefined)) {
      result[item] = 0;
      break
    }
    if (item === 'maxPrice' && (result[item] === null || result[item] === undefined)) {
      result[item] = 1000000;
    }
  }
  return result;
}
export const checkCurrent = (values) => {
  const result = {};
  for (const item in values) {
    if (values[item].length !== 0) {
      result[item] = values[item].toString();
    }
  }
  return result;
}
