const express = require("express");
const menuKitchenRoutes = express.Router();

const { MenuKitchenModel } = require("../model/menuKitchen");

menuKitchenRoutes.get("/", async (req, res) => {
    let data;
    try {
        data = await MenuKitchenModel.find();
        res.send(data);
    }
    catch (err) {
        console.log(err)
        res.send("Something wents wrong");
    }
})

menuKitchenRoutes.post("/create", async (req, res) => {
    let data = req.body;
    try {
        await MenuKitchenModel.insertMany(data);
        res.send('Successfully added');
    }
    catch (err) {
        console.log(err);
        res.send("Something wents wrong");
    }
})
module.exports = {
    menuKitchenRoutes
}