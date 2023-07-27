const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// event Schema

const eventSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  date: {
    type: Date,
    require: true,
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Event = mongoose.model("events", eventSchema);

module.exports = Event;
