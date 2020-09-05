const { Schema, model } = require("mongoose");

const formSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    questions: {
      type: [{type: String}],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Form", formSchema);
