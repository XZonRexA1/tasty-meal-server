const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;

const chefDetails = require("./data/chefDetails.json");
const chefRecipes = require("./data/chefRecipes.json");
app.use(cors());

app.get("/", (req, res) => {
  res.send("Tasty Meal is running");
});

app.get("/chefDetails", (req, res) => {
  res.send(chefDetails);
});

app.get("/chefRecipes", (req, res) => {
  res.send(chefRecipes);
});

app.get("/chefRecipes/:id", (req, res) => {
  const id = req.params.id;
  const selectedChefRecipes = chefRecipes.find((r) => r._id === id);
  res.send(selectedChefRecipes);
});

app.get("/chefDetails/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (id === 0) {
    res.send(chefRecipes);
  } else {
    const chefDetailsRecipes = chefRecipes.filter(
      (r) => parseInt(r.chefDetail_id) === id
    );
    res.send(chefDetailsRecipes);
  }
});

app.listen(port, () => {
  console.log(`Tasty Meal API is running on port: ${port}`);
});
