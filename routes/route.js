const router = require("express").Router();
const apiMiddleware = require("../middleware/apiKey.js");

// router.use(apiMiddleware);

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

router.get("/api/products", apiMiddleware, (req, res) => {
  res.json([
    {
      id: 1,
      name: "Product 1",
    },
    {
      id: 2,
      name: "Product 2",
    },
  ]);
});

module.exports = router;
