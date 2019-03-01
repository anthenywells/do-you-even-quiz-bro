"use strict";

const { Pool } = require("pg");
const credentials = new Pool({
user: "postgres",
password: "Password",
host: "localhost",
port: 5432,
database: "ultimatequiz",
ssl: false
});

module.exports = credentials;