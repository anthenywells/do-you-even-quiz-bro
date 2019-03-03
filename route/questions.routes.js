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
  pool.query("insert into scores (player_name, score) values ($1::text, $2::int)", [req.body.player_name, req.body.score])
 });


module.exports = questions;
