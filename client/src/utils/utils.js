
const isUserAuthenticated = () => {
  return localStorage.getItem("accessToken") !== null
}

const saveToken = (token) => {
  localStorage.setItem("accessToken", token)
}

const destroyToken = () => {
  localStorage.removeItem("accessToken")
}



export {isUserAuthenticated, saveToken, destroyToken}
