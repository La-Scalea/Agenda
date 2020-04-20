"use strict";
require("dotenv").config();
const jwt = require("jsonwebtoken");
const httpStatus = require("http-status-codes");

module.exports = {
  async generateToken(payload) {
    return await jwt.sign(payload, process.env.SECRET, { expiresIn: 86400 });
  },
  async decodeToken(token) {
    var data = await jwt.verify(token, process.env.SECRET);
    return data;
  },
  async extractDataByToken(header) {
    const fragmentAutorizationHeader = header.split(" ");
    const data = await this.decodeToken(fragmentAutorizationHeader[1]);
    return data;
  },
  async extractDataByAutorizationHeader(autorizationHeader) {
    const data = this.extractDataByToken(autorizationHeader);
    return data;
  },
  async authenticate(req, res, next) {
    const autorizationHeader = req.headers.authorization;

    if (!autorizationHeader) {
      return res
        .status(httpStatus.UNAUTHORIZED)
        .send({ error: "Token not found" });
    } else {
      const fragmentAutorizationHeader = autorizationHeader.split(" ");

      if (!fragmentAutorizationHeader === 2) {
        return res
          .status(httpStatus.UNAUTHORIZED)
          .send({ error: "Token has a problem" });
      } else {
        const [scheme, token] = fragmentAutorizationHeader;

        if (!/^Bearer$/i.test(scheme)) {
          return res
            .status(httpStatus.UNAUTHORIZED)
            .send({ error: "Token was malformatted" });
        } else {
          jwt.verify(token, process.env.SECRET, (err, decoded) => {
            if (err) {
              return res
                .status(httpStatus.UNAUTHORIZED)
                .send({ error: "Token invalid" });
            } else {
              req.param.id = decoded.user_uu_identity;
              return next();
            }
          });
        }
      }
    }
  },
};
