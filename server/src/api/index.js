const express = require("express");
const faker = require("faker");
const emojis = require("./emojis");
const Emails = require("../models/emailSchema");

const router = express.Router();
const fakerData = () => {
  const from = faker.internet.email();
  const to = faker.internet.email();
  console.log(faker.date.past());
  console.log(faker.date.past());

  // new Emails({ from, to, subject: "subject", date: "2020-10-26T14:50:17.227Z" })
  //   .save()
  //   .then((saved) => {
  //     console.log("it is saved");
  //     console.log(saved);
  //   });
};
router.post("/", (req, res) => {
  // res.json({
  //   message: "API - 👋🌎🌍🌏",
  // });
  // console.log(new Date().toISOString());
  try {
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
