const mongoose = require("mongoose");

const menuWineSchema = mongoose.Schema({
    "title": String,
    "image": String,
    "price": Number
})

const MenuWineModel = mongoose.model("menu_wine", menuWineSchema);

module.exports = {
    MenuWineModel
}