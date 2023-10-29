const PORT = 3000;
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { AceBase } = require("acebase");

morgan("tiny");

const db = new AceBase("my_db");

const app = express();
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
