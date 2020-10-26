const express = require("express");
const faker = require("faker");
const emojis = require("./emojis");
const Emails = require("../models/emailSchema");

const router = express.Router();

const create = () => {};

const fakerData = () => {
  const from = faker.internet.email();
  const to = faker.internet.email();
  const subject = faker.lorem.sentence();
  const date = faker.date.past().toISOString();
  const randomnumber = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
  let toData = [];
  for (let i = 0; i < randomnumber; i++) {
    const to = faker.internet.email();
    toData.push(to);
  }

  new Emails({ from, to: toData, subject, date })
    .save()
    .then((saved) => {
      console.log("Successfully Saved !");
      console.log(saved);
    })
    .catch((error) => console.log(error));
};
router.post("/", (req, res) => {
  // res.json({
  //   message: "API - 👋🌎🌍🌏",
  // });
  // console.log(new Date().toISOString());
  try {
    // const randomnumber = Math.floor(Math.random() * (100 - 1 + 99)) + 99;
    // let toData = [];
    // for (let i = 0; i < randomnumber; i++) {
    //   fakerData();
    // }

    console.log(req.body);
    Emails.find({
      date: {
        $gte: req.body.start,
        $lt: req.body.last,
      },
    }).then((ans) => res.json(ans));
  } catch (error) {
    res.status(500);
    console.log("ERROR=====>", error);
  }
});

router.use("/emojis", emojis);

module.exports = router;
