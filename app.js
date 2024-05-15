const express = require("express");
const mongoose = require("mongoose");

mongoose
  .connect("")
  .then(() => {
    console.log("mongo connect");
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();
app.get("/", (req, res) => {
  res.send("hello");
});
const port = 5000;

app.listen(port, function () {
  console.log(`server is running=====================${port}`);
});
