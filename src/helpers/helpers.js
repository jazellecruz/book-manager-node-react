
const kebabCase = (string) => {
  let modifiedString = string.toLowerCase().replace(/ /g, "-")
  return modifiedString
}

export {kebabCase}