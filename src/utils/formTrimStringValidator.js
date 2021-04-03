/* eslint-disable prefer-promise-reject-errors */
const formTrimStringValidator = (rejectMessage = 'The field should not contain just a spaces.') => () => {
  const stringTrimCheck = (_, value) => {
    const trimmedStrimg = value.trim()
    if (!trimmedStrimg) return Promise.reject(rejectMessage)
    if (value[0] === ' ' || value[1] === ' ') return Promise.reject('Field should not contain just 1 character and spaces.')
    
    return Promise.resolve()
  }
  return {
    validator: stringTrimCheck
  }
}
export default formTrimStringValidator