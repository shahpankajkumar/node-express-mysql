require('dotenv').config();
const jwt = require("jsonwebtoken");
const config = process.env;

module.exports = class AuthorizationMiddleware {
    async auth(req, res, next) {
        const authHeader = req.headers.authorization;
        if (authHeader) {
          const token = authHeader.split(' ')[1];
          jwt.verify(token, config.JWT_SECRET, (err, user) => {
            if (err) {
              return res.sendStatus(403);
            } 
            req.user = user;
            next();
          });
        } else {
          res.sendStatus(401);
        }
    }
}
