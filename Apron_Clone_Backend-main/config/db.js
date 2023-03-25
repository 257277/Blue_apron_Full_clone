const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb+srv://rahulSharma:rahulSharma@cluster0.so3yn.mongodb.net/BlackApron?retryWrites=true&w=majority");


module.exports = {
    connection
}