const express = require("express");
const faker = require("faker");
const emojis = require("./emojis");
const Emails = require("../models/emailSchema");

const router = express.Router();

const create = () => {};

//To save random data
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
  try {
    // const randomnumber = Math.floor(Math.random() * (100 - 1 + 99)) + 99;
    // let toData = [];
    // for (let i = 0; i < randomnumber; i++) {
    //   fakerData();
    // }
  } catch (error) {
    res.status(500);
    console.log("ERROR=====>", error);
  }
});

router.get("/email", (req, res) => {
  try {
    console.log(req.query);
    Emails.find({
      date: {
        $gte: req.query.start,
        $lt: req.query.last,
      },
    }).then((ans) => res.json(ans));
  } catch (error) {
    res.status(500);
    console.log("ERROR=====>", error);
  }
});
router.use("/emojis", emojis);

module.exports = router;
