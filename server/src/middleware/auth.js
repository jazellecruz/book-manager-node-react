const {verifyAccessToken } = require("../utils/utils");

const isUserAuthenticated = async(req, res, next) => {
  if(process.env.NODE_ENV === "development") return next();
  let token = req.cookies.token; 

  try{
    let isTokenVerified = verifyAccessToken(token);
    if(!isTokenVerified) return res.sendStatus(401);
    next();
  } catch(err) {
    res.sendStatus(500);
  }
}

module.exports = {isUserAuthenticated}
