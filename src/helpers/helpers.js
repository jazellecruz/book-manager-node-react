
const kebabCase = (string) => {
  let modifiedString = string.toLowerCase().replace(/ /g, "-")
  return modifiedString
}

const getPrecision = (string) => {
  let num = parseFloat(string);
  let decimal = Math.round((num % 1) * 100) /100
  if (decimal === 0) return 0.1;
  return decimal
}

export {kebabCase, getPrecision}