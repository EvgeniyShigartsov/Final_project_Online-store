/* eslint-disable no-restricted-syntax */
export const checkFormValues = (values) => {
  const result = {...values};
  for (const item in result) {
    if (!result[item] || !result[item].length) {
      if (item === 'minPrice') {
        result.minPrice = 0
      } else if (item === 'maxPrice') {
        result.maxPrice = 10000000
      } else delete result[item]
    }
  }
  return result;
}

export default checkFormValues