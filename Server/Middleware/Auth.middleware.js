const jwt = require("jsonwebtoken");
require('dotenv').config()

function AuthMiddleware(req, res, next) {
  const token = req.header("token");
  if (token) {
    try {
      var decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      if (decoded) {
        next();
      }
    } catch (error) {
      return res.status(401).json({
        message: "Token expired. Login to continue!",
        error: error,
      });
    }
  } else {
    return res.status(200).json({
      message: "Login to your account",
    });
  }
}

module.exports = AuthMiddleware;