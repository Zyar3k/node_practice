const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.end("Home page");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
  console.log(`Server running on http://localhost:${PORT}`);
});
