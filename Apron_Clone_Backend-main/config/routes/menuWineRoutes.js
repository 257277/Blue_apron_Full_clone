const express = require("express");
const menuWineRoutes = express.Router();

const { MenuWineModel } = require("../model/menuWine");

menuWineRoutes.get("/", async (req, res) => {
    let data;
    try {
        data = await MenuWineModel.find();
        res.send(data);
    }
    catch (err) {
        console.log(err)
        res.send("Something wents wrong");
    }
})

menuWineRoutes.post("/create", async (req, res) => {
    let data = req.body;
    try {
        await MenuWineModel.insertMany(data);
        res.send('Successfully added');
    }
    catch (err) {
        console.log(err);
        res.send("Something wents wrong");
    }
})
module.exports = {
    menuWineRoutes
}