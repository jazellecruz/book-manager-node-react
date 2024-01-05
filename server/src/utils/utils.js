const jwt = require("jsonwebtoken");

const generateAccessToken = ({username}) => {
  const user = {
    username: username
  }

  let accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '6h' });
  
  return accessToken
}

const generateRefreshToken = ({username}) => {
  const user = {
    username: username
  }

  let refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)

  return refreshToken
}

const verifyAccessToken = (token) => {
  try{
    let isVerified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    if(isVerified) return true;
  } catch(err) {
    return false;
  }
}


module.exports = { generateAccessToken, generateRefreshToken, verifyAccessToken }