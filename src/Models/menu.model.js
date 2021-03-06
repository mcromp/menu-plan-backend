const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema({
 item: {
  type: String,
  required: true,
 },
 category: {
  type: String,
  required: true,
 },
 id: {
  type: String,
  required: true,
 },
});

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;
