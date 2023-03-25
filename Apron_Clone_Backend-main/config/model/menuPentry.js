const mongoose = require("mongoose");

const menuPentrySchema = mongoose.Schema({
    "title": String,
    "image": String,
    "price": Number
})

const MenuPentryModel = mongoose.model("menu_Pentry", menuPentrySchema);

module.exports = {
    MenuPentryModel
}