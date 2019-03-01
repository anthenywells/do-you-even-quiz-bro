"use strict";

const express = require("express");

const app = express();
const questions = require("./route/questions.routes");
const scores = require("./route/scores.routes");

app.use(express.static("./public"));
app.use(express.json());
app.use("/", questions);
app.use("/", scores);

app.listen(8080, _ => console.log("Server is running"));