const cutString = (string, maxCharacters) => {
  let verifiedString = string

  if (verifiedString.length > maxCharacters) {
    const truncatedString = verifiedString.slice(0, maxCharacters)
    verifiedString = `${truncatedString}...`
  }

  return verifiedString
}

export default cutString