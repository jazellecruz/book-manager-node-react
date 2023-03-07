
import axios from "axios"

const isUserAuthenticated = () => {
  return localStorage.getItem("accessToken") !== null
}

const saveToken = (token) => {
  localStorage.setItem("accessToken", token)
}

const destroyToken = () => {
  localStorage.removeItem("accessToken")
}


const validateToken = () => {
  let token = localStorage.getItem("accessToken")

  if(!token) return false;

  axios({
    method: "post",
    url: "http://localhost:8000/auth/verify",
    headers: {
      "x-access-token": token
    }})
    .then(res => {
      if (res.data.status === 200) {
        return true
      }
    })
    .catch(err => {
      localStorage.setItem("user", {isUserAuthenticated: false});
    });

}

  // return localStorage.getItem("accessToken") !== null
export {isUserAuthenticated, saveToken, destroyToken, validateToken}
