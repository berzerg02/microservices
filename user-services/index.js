const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("User Service is running");
});

app.listen(5000, () => {
  console.log("User Service listening on port 5000");
});
