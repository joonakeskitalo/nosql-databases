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

// const db = new AceBase("my_db");

app.get("", (req, res) => {
  return res.send("Burgers API");
});

app.get("/burgers", (req, res) => {
  const mockResponse = [
    {
      id: "1",
      name: "Example burger",
      description: "example description",
      address: "Example Street 1",
      website: "examplewebsite.com",
    },
    {
      id: "2",
      name: "Example burger",
      description: "example description",
      address: "Example Street 1",
      website: "examplewebsite.com",
    },
    {
      id: "3",
      name: "Example burger",
      description: "example description",
      address: "Example Street 1",
      website: "examplewebsite.com",
    },
    {
      id: "4",
      name: "Example burger",
      description: "example description",
      address: "Example Street 1",
      website: "examplewebsite.com",
    },
    {
      id: "5",
      name: "Example burger",
      description: "example description",
      address: "Example Street 1",
      website: "examplewebsite.com",
    },
  ];

  return res.json(mockResponse);
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
