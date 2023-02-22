const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("index", {
    title: "Node Practice",
  });
});

router.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Contact Page",
  });
});

router.get("/about", (req, res) => {
  res.render("about", {
    title: "About page",
  });
});

router.get("/statistic", (req, res) => {
  res.render("statistic", {
    title: "Statistic page",
  });
});

router.get("/download", (req, res) => {
  res.download("./assets/picture.jpg");
});

module.exports = router;
