const express = require("express");
const menuRoutes = express.Router();

const { MenuModel } = require("../model/menuModel");
// menuRoutes.use(async (req, res, next) => {
//     if (req.method == "GET") {
//     let page=1;
//     let limit=2;
//     const data = await MenuModel.find().skip(page * limit).limit(limit);
//     res.send(data);
//     }
// })
menuRoutes.get("/", async (req, res) => {
    let data;
    let page = Number(req.query.page) - 1;
    let limit = Number(req.query.limit);
    try {
        data = await MenuModel.find().skip(page * limit).limit(limit);
        res.send(data);
    }
    catch (err) {
        console.log(err)
        res.send("Something wents wrong");
    }
})

menuRoutes.post("/create", async (req, res) => {
    let data = req.body;
    try {
        await MenuModel.insertMany(data);
        res.send('Successfully added');
    }
    catch (err) {
        console.log(err);
        res.send("Something wents wrong");
    }
})
module.exports = {
    menuRoutes
}