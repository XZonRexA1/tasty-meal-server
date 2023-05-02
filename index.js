const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;

const chefDetails = require("./data/chefDetails.json");
app.use(cors());

app.get("/", (req, res) => {
  res.send("Tasty Meal is running");
});

app.get("/chefDetails", (req, res) => {
  res.send(chefDetails);
});

app.listen(port, () => {
  console.log(`Tasty Meal API is running on port: ${port}`);
});
