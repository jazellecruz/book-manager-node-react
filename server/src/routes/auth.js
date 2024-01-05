const router = require("express").Router();
const { generateAccessToken, verifyAccessToken } = require("../utils/utils");
const {authenticateUser} = require("../controllers/auth");

router.post("/login", async(req, res, next) => {
  if(process.env.NODE_ENV === "development") return res.sendStatus(200);
  
  const {username, password} = req.body;

  try{
    let match = await authenticateUser(username, password);

    if(!match) return res.sendStatus(401);

    let accessToken = generateAccessToken({username: username})

    res.cookie("token", accessToken, {
      httpOnly: true,
      secure: true
    });
    res.sendStatus(200);
  } catch(err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.get("/verify", async(req, res, next) => {
  if(process.env.NODE_ENV === "development") return res.sendStatus(200);

  let token = req.cookies.token;
  if(!token) return res.sendStatus(401);

  try{
    let isTokenVerified = await verifyAccessToken(token);

    if(isTokenVerified) {
      res.sendStatus(200);
    } else {
      res.sendStatus(401);
    }
  } catch(err) {
    res.sendStatus(500);
  }
});

router.get("/logout", (req, res) => {
  try{
    res.clearCookie("token");
    res.sendStatus(200);
  } catch(err) {
    res.sendStatus(500);
  }
});

module.exports = router