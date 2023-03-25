const express = require("express");

const app = express();
const { connection } = require("./config/db");
app.use(express.json());
var cors = require('cors')
const { menuRoutes } = require("./config/routes/menuroutes");
const { menuMealRoutes } = require("./config/routes/menuMealRoutes")
const { menuWineRoutes } = require("./config/routes/menuWineRoutes")
const { menuPentryRoutes } = require("./config/routes/menuPentryRoutes")
const { menuKitchenRoutes } = require("./config/routes/menuKitchenRoutes")
const { userRouter } = require("./config/routes/userRoutes")
app.use(cors());
app.use("/menu", menuRoutes);
app.use("/meal", menuMealRoutes);
app.use("/wine", menuWineRoutes);
app.use("/Pentry", menuPentryRoutes);
app.use("/Kitchen", menuKitchenRoutes);
app.use("/user", userRouter);
app.listen(4500, async () => {
    try {
        await connection;
        console.log("sucessfully connected to database");
    }
    catch (err) {
        console.log("not able to connect database");
        console.log(err);
    }
    console.log("server is running on port 4500");

})