const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const chefDetailsRecipes = require("./data/chefDetailsRecipes.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Tasty Meal is running");
});

app.get("/chefDetailsRecipes", (req, res) => {
  res.send(chefDetailsRecipes);
});




app.listen(port, () => {
  console.log(`Tasty Meal API is running on port: ${port}`);
});
