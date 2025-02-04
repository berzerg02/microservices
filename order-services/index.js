const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Order Service is running");
});

app.listen(5002, () => {
  console.log("Order Service listening on port 5002");
});
