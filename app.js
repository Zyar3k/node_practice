const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

console.log(app.get("views"));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Node Practice",
  });
});
app.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Contact Page",
  });
});
app.get("/about", (req, res) => {
  res.render("about", {
    title: "About page",
  });
});

app.get("/download", (req, res) => {
  res.download("./assets/picture.jpg");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
  console.log(`Server running on http://localhost:${PORT}`);
});
