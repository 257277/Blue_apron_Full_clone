const express = require("express");
const menuPentryRoutes = express.Router();

const { MenuPentryModel } = require("../model/menuPentry");

menuPentryRoutes.get("/", async (req, res) => {
    let data;
    try {
        data = await MenuPentryModel.find();
        res.send(data);
    }
    catch (err) {
        console.log(err)
        res.send("Something wents wrong");
    }
})

menuPentryRoutes.post("/create", async (req, res) => {
    let data = req.body;
    try {
        await MenuPentryModel.insertMany(data);
        res.send('Successfully added');
    }
    catch (err) {
        console.log(err);
        res.send("Something wents wrong");
    }
})
module.exports = {
    menuPentryRoutes
}