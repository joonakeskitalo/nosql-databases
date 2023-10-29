const PORT = 3000;
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { AceBase } = require("acebase");

morgan("tiny");

const app = express();
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

const db = new AceBase("my_db");

const getAllBurgers = async () => {
  const snapshot = await db.ref("burgers").get();
  return snapshot.val();
};

app.get("", (req, res) => {
  return res.send("Burgers API");
});

app.get("/burgers", async (req, res) => {
  const burgers = await getAllBurgers();
  return res.json(burgers);
});

const notFoundError = (req, res, next) => {
  res.status(404);
  const error = new Error("Not Found");
  next(error);
};

const errorHandler = (error, req, res) => {
  res.status(res.statusCode || 500);
  res.json({
    message: error.message,
  });
};

app.use(notFoundError);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
