const express = require("express");

const { UserModel } = require("../model/userModel");
const { hashing } = require("../middleware/hashing");
const userRouter = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


userRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.find({ email });
        if (user.length > 0) {
            bcrypt.compare(password, user[0].password, function (err, result) {
                if (result) {
                    let token = jwt.sign({ userid: user[0]._id }, "Black_Apron");
                    res.send({ "msg": "Login Successfull", "token": token });
                }
                else {
                    res.send("Wrong Credential");
                }
            });

        }
        else {
            res.send("Wrong Credential");
        }
    }
    catch (err) {
        res.send("Wrong Credential");
    }
})

userRouter.use(hashing);
userRouter.post("/register", async (req, res) => {
    let data = req.body;
    let email = data.email;
    let user = await UserModel.find({ email });

    if (user.length == 0) {
        try {

            await UserModel.insertMany(data);
            res.send("Registration completed!");
        }
        catch (err) {
            console.log(err);
            res.send("Something went wrong");
        }
    }
    else {

        res.send("Already Registered!");
    }

})

module.exports = {
    userRouter
}