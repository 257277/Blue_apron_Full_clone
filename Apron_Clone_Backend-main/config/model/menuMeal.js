const mongoose = require("mongoose");

const menuMealSchema = mongoose.Schema({
    "title": String,
    "subtitle": String,
    "image": String,
    "price": Number
})

const MenuMealModel = mongoose.model("menu_meal", menuMealSchema);

module.exports = {
    MenuMealModel
}