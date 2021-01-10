require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res, next) =>
  res.status(200).json({ message: "Successfully GET" })
);

app.listen(process.env.PORT, () =>
  console.log(`Server listening on port ${process.env.PORT}...`)
);
