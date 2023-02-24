const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const https = require("https");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Cracow&lang=pl&appid=${process.env.API_KEY}`;
  //   res.sendFile(__dirname + "/index.html");
  https.get(url, (response) => {
    console.log(response);
  });
});

app.listen(PORT, (req, res) => {
  console.log(`Server is running: http://localhost:${PORT}`);
});
