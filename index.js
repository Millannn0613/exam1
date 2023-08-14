const path = require("path");
const express = require("express");
const app = express();
const multer = require("multer");
const dotenv = require("dotenv");
dotenv.config({ path: path.join(__dirname, "config", "config.env") });
const connectDB = require("./data/mongoose");
const userRouter = require("./router/userRouter");
const contentRouter = require("./router/contentRouter");

app.use(express.json());
app.use("/user", userRouter);
app.use("/content", contentRouter);

connectDB();
app.listen(3800, () => console.log("Server is running on port 3800"));
