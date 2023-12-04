import config from "../config/authConfig.js";
import User from "../models/userSchema.js";
import Stock from "../models/estoqueSchema.js";
import mongoose from "mongoose";
// import checkDuplicateEmail from "../middleware/verifySignUp.js";

import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

async function signup(req, res) {
  if (!req.body.userEmail || !req.body.userPassword) {
    res
      .status(500)
      .send({ message: "Try sending a json with userEmail and userPassword" });
    return;
  }

  let user = new User({
    userEmail: req.body.userEmail,
    userPassword: bcrypt.hashSync(req.body.userPassword, 8),
  });

  const foundUser = await User.findOne({
    userEmail: req.body.userEmail,
  })
    .exec()
    .catch((err) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
    });

  if (foundUser && user.userEmail === foundUser.userEmail) {
    res.status(400).send({ message: "Failed! Email is already in use!" });
    return;
  }

  user.id = new mongoose.Types.ObjectId();

  const stock = new Stock({
    user: user.id,
    ingredientes: [],
  });
  stock.save().catch((err) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
  });

  user.estoque = stock.id;

  user.save().catch((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
  });

  res.send({ message: "User was registered successfully!" });
}

async function signin(req, res) {
  if (!req.body.userEmail || !req.body.userPassword) {
    res
      .status(500)
      .send({ message: "Try sending a json with userEmail and userPassword" });
    return;
  }

  let user = await User.findOne({
    userEmail: req.body.userEmail,
  })
    .exec()
    .catch((err) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
    });

  if (!user) {
    return res.status(404).send({ message: "User Not found." });
  }

  var passwordIsValid = bcrypt.compareSync(
    req.body.userPassword,
    user.userPassword
  );

  if (!passwordIsValid) {
    return res.status(401).send({
      accessToken: null,
      message: "Invalid Password!",
    });
  }

  const token = jwt.sign({ id: user.id }, config.secret, {
    algorithm: "HS256",
    //allowInsecureKeySizes: true,
    expiresIn: 86400, // 24 hours
  });

  res.status(200).send({
    id: user.id,
    userEmail: user.userEmail,
    estoque: user.estoque,
    accessToken: token,
  });
}

async function verifyToken(req, res, next) {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }

  await jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!",
      });
    }
    req.userId = decoded.id;

    next();
  });

  res.send({ message: "Authorized!", userId: req.userId });
}

export default { signin, signup, verifyToken };
