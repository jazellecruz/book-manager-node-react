
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

const trimString = (string) => {
  let trimmedString
  if(string) {

    if(string.length < 261){
      trimmedString = string
    } else {
      trimmedString = `${string.slice(0, 261)}...`
    }
    
  } else{
    trimmedString = undefined
  }

  return trimmedString
}

export {kebabCase, getPrecision, trimString}