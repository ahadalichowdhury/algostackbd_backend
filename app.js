const bodyParser = require("body-parser");
const router = require("./src/routes/api");
const dotenv = require("dotenv").config();

//security middleware lib import
// const RateLimit = require('express-rate-limit');
const helmet = require("helmet");
const mongosanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");

//database lib import
const mongoose = require("mongoose");
const express = require("express");
const app = express();

//security middleware implementations
app.use(cors());
app.use(helmet());
app.use(mongosanitize());
app.use(xss());
app.use(hpp());

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));

//body parser Implementation
app.use(bodyParser.json());

//requrest rate limit
// const limiter =new RateLimit({windowMs: 15*60*1000, max:3000});
// app.use(limiter)

//mongodb database connection

mongoose.connect(process.env.MONGODB_URL, (error) => {
  console.log("Connection Success");
  console.log(error);
});

// Routing Implement
app.use("/api/v1", router);

// Undefined Route Implement
app.use("*", (req, res) => {
  res.status(404).json({ status: "fail", data: "Not Found" });
});

module.exports = app;
