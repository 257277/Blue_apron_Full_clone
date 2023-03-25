const mongoose = require("mongoose");

const menuSchema = mongoose.Schema({
    "title": String,
    "description": String,
    "ingredients": Array,
    "Instruction": [
        {
            "image": String,
            "title": String,
            "description": String
        }
    ],
    "image": String,
    "ingredients_image": String
})

const MenuModel = mongoose.model("menu_item", menuSchema);

module.exports = {
    MenuModel
}
