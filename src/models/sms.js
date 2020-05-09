const { Schema, model } = require("mongoose");

const smsSchema = new Schema(
  {
    Body: {
      type: String,
      required: true,
    },
    To: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("sms", smsSchema);
