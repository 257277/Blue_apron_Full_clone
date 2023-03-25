const express = require("express");
const menuMealRoutes = express.Router();

const { MenuMealModel } = require("../model/menuMeal");

menuMealRoutes.get("/", async (req, res) => {
    let data;
    try {
        data = await MenuMealModel.find();
        res.send(data);
    }
    catch (err) {
        console.log(err)
        res.send("Something wents wrong");
    }
})

menuMealRoutes.post("/create", async (req, res) => {
    let data = req.body;
    try {
        await MenuMealModel.insertMany(data);
        res.send('Successfully added');
    }
    catch (err) {
        console.log(err);
        res.send("Something wents wrong");
    }
})
module.exports = {
    menuMealRoutes
}