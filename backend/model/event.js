const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Please enter your event product name!"],
  },
  description: {
    type: String,
    require: [true, "Please enter your event product description!"],
  },
  category: {
    type: String,
    require: [true, "Please enter your event product category!"],
  },
  start_Date: {
    type: Date,
    required: true,
  },
  finish_Date: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    default: "Running",
  },

  tags: {
    type: String,
  },
  originalPrice: {
    type: Number,
    require: [true, "Please enter event product price!"],
  },
  discountPrice: {
    type: Number,
    require: [true, "Please enter event product dicsount price!"],
  },
  stock: {
    type: Number,
    require: [true, "Please enter your event product stock!"],
  },
  images: [{ type: String }],
  shopId: {
    type: String,
    required: true,
  },
  shop: {
    type: Object,
    required: true,
  },

  sold_out: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Event", eventSchema);
