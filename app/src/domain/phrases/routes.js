const express = require("express");
const controller = require("./controller");
const router = express.Router();

router.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "Content-Type",
    "Authorization"
  );
  next();
});

router.get("/", function (req, res) {
  const result = controller.randomPhrase(req, res);
  return res.send(result);
});

module.exports = router;
