const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const https = require("https");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  //   console.log(req.body.cityName);
  const query = req.body.cityName;
  const units = "metric";
  const lang = "pl";
  const apiKey = process.env.API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=${units}&lang=${lang}&appid=${apiKey}`;

  https.get(url, (response) => {
    response.on("data", (data) => {
      const weatherData = JSON.parse(data);
      const weatherDesc = weatherData.weather[0].description;
      const weatherIcon = weatherData.weather[0].icon;
      const temp = weatherData.main.temp;
      const imgUrl = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
      res.write(`<h1>Miasto: ${query}</h1>`);
      res.write(`<p>Temperatura: ${temp}</p>`);
      res.write(`<h3>Opis: ${weatherDesc}</h3>`);
      res.write(`<img src=${imgUrl} />`);
      res.send();
      //   res.send(
      //     `<p>Temperatura: ${temp}</p><br/> <h1>Opis: ${weatherDesc}</h1>`
      //   );
    });
  });
});

app.listen(PORT, (req, res) => {
  console.log(`Server is running: http://localhost:${PORT}`);
});
