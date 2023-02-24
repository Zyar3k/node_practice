const express = require("express");

const app = express();
const PORT = 8888;

app.get("/", (req, res) => {
  res.send("Home");
});

app.listen(PORT, (req, res) => {
  console.log(`Server on http://localhost:${PORT}`);
});
