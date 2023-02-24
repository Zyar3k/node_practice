const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  const num1 = parseInt(req.body.num1);
  const num2 = parseInt(req.body.num2);

  const sum = num1 + num2;

  res.send(`<h1>The sum is ${sum}</h1>`);
});

app.listen(PORT, (req, res) => {
  console.log(`Server is running http://localhost:${PORT}`);
});
