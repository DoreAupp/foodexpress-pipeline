const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("FoodExpress API is running!");
});

app.get("/search", (req, res) => {
  res.send("INSIDE SEARCH API..");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});