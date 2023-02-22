const express = require("express");
const app = express();
const path = require("path");
const allRoutes = require("./routes/route.js");
const PORT = 3000;
app.set("view engine", "ejs");

app.use(allRoutes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
  console.log(`Server running on http://localhost:${PORT}`);
});
