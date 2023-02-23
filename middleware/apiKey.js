function apiKey(req, res, next) {
  const apiKey = "12345";
  console.log(req.query);

  if (req.query.api_key && req.query.api_key === apiKey) {
    next();
  } else {
    res.json({
      msg: "Invalid authentication",
    });
  }
}

module.exports = apiKey;
