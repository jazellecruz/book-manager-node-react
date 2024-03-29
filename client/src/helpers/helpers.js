
const kebabCase = (string) => {
  if(!string) {
    return "";
  }
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

    if(string.length < 200){
      trimmedString = string
    } else {
      trimmedString = `${string.slice(0, 200)}...`
    }
    
  } else{
    trimmedString = undefined
  }

  return trimmedString
}

const sanitizeInput = (value, name) => {
  if(!value) return null

  if(name === "category_id" || name === "status_id" || name === "rating") {
    return Number(value)
  } else {
    let string = value.replace(/"/g, "'")
    return  string || value
  }

}


export {kebabCase, getPrecision, trimString, sanitizeInput}