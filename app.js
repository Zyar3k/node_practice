const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/index.html"));
});
app.get("/contact", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/contact.html"));
});
app.get("/about", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/about.html"));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
  console.log(`Server running on http://localhost:${PORT}`);
});
