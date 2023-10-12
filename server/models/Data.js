const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  userId: { type: String },
  title: {
    type: String,
  },
  body: {
    type: String,
  },
});


const model = mongoose.model("Blog", blogSchema);
module.exports = model