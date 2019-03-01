"use strict";
const express = require("express");
const questions = express.Router();
const pool = require("./connection")

function selectAll(req, res) {
  pool.query("select * from questionlist order by random() limit 5;").then(function(result) {
    res.send(result.rows);
  })
}

questions.get("/questions", function(req, res){
  selectAll(req, res);
});

questions.post("/scores", function(req, res) {
  pool.query("insert into scores (player_name) values ($1::text)", [req.body.player_name]).then(selectAll(req, res));
 });


module.exports = questions;
