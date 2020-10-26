const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const emailSchema = new Schema({
  from: { type: String, required: true },
  to: [String],
  subject: { type: String, required: true },
  date: { type: String, required: true },
});

const emailData = mongoose.model("email", emailSchema);

module.exports = emailData;
