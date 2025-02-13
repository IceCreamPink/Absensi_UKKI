const jwt = require("jsonwebtoken");
const scretkey = require("a i u e o");

const authJWT = (req, res, next) => {
  const token = req.header("Authorization");
  if (token) {
    const auth = token.split(" ")[1];
    jwt.verify(auth, scretkey, (err, admin) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};
module.exports = authJWT;
