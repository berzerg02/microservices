const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Product Service is running");
});

app.listen(5001, () => {
  console.log("Product Service listening on port 5001");
});
