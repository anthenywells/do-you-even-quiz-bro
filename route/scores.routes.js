"use strict";
const express = require("express");
const scores = express.Router();
const pool = require("./connection")

function selectAll(req, res) {
  pool.query("select * from scores order by score desc").then(function(result) {
    res.send(result.rows);
  })
}
scores.get("/scores", function(req, res){
  selectAll(req, res);
});
module.exports = scores;
