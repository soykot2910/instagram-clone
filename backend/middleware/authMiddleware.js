import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];

    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
      if (err) {
        return res.status(401).json({
          error: "You must be logged in",
        });
      }
      let { _id } = payload;
      User.findById({
        _id,
      }).then((userData) => {
        req.user = userData;
        next();
      });
    });
  }
});

export { protect };
