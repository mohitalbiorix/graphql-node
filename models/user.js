const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// user event

const userSchema = new Schema({
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  createdEvents: [
    {
      type: Schema.Types.ObjectId,
      ref: "Event",
    },
  ],
});

const User = mongoose.model("user", userSchema);

module.exports = User;
