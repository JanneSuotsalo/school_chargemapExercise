// https://docs.mongodb.com/manual/core/2dsphere/

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const levelSchema = new Schema({
  Title: String,
  Comments: String,
  UsFastCgargeCapable: Boolean
});

module.exports = mongoose.model("level", levelSchema);
