"use strict";
const express = require("express");
const scores = express.Router();
const pool = require("./connection")

function selectAll(req, res) {
  pool.query("select * from scores").then(function(result) {
    res.send(result.rows);
  })
}

scores.get("/scores", function(req, res){
  selectAll(req, res);
});
scores.post("/scores", function(req, res) {
  pool.query("insert into scores (player_name, score) values ($1::text, $2::int)", [req.body.player_name, req.body.score]).then(selectAll(req, res));
 });
module.exports = scores;
