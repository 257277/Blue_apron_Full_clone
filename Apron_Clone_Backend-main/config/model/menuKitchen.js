const mongoose = require("mongoose");

const menuKitchenSchema = mongoose.Schema({
    "title": String,
    "image": String,
    "price": Number
})

const MenuKitchenModel = mongoose.model("menu_Kitchen", menuKitchenSchema);

module.exports = {
    MenuKitchenModel
}