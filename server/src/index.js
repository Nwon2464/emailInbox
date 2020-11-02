const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");
const axios = require("axios");
const base64 = require("base-64");
const utf8 = require("utf8");

const hotpTotpGenerator = require("hotp-totp-generator");
require("dotenv").config();

const middlewares = require("./middlewares");
const api = require("./api");

const app = express();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const db = mongoose.connection;
db.once("open", () => {
  console.log("👏👏👏👏👏👏 Mongo DB Atlas has been connected! 👏👏👏👏👏👏");
});

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄",
  });
});

app.use("/api/v1", api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Listening on ${process.env.PORT}...👀`);
});

module.exports = app;
//////////////////
const reqJSON = {
  github_url: "https://github.com/dnjsskarb7/repo1",
  contact_email: "nwon2464@gmail.com",
};
const stringData = JSON.stringify(reqJSON);
const HURL = "https://api.challenge.hennge.com/challenges/003";

const secretShared = reqJSON.contact_email + "HENNGECHALLENGE003";
// totp.options = { digits: 10, algorithm: "sha512", epoch: 0 };
// const myTotp = totp.generate(secretShared);
// const isValid = totp.check(myTotp, secretShared);

// console.log("Token Info:", { myTotp, isValid });

const MyTOTP = hotpTotpGenerator.totp({
  key: secretShared,
  T0: 0,
  X: 30,
  algorithm: "sha512",
  digits: 10,
});

const authStringUTF = reqJSON.contact_email + ":" + MyTOTP;
const bytes = utf8.encode(authStringUTF);
const encoded = base64.encode(bytes);
console.log(encoded.length);
console.log(authStringUTF);
console.log("bytes=>", bytes);
console.log("encoded =>", encoded);
const createReq = async () => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + encoded,
      },
    };

    console.log("Making req", { HURL, reqJSON, config });

    const res = await axios.post(HURL, stringData, config);
    console.log("post Request Success", res.data);
  } catch (err) {
    console.error("ERROR", err.response.data);
  }
};

createReq();
//
//
