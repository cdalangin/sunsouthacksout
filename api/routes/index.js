var express = require('express');
var router = express.Router();
var Cocktail = require("../models/cocktail");
var queryResults = require("../public/queries");

router.get("/", (req, res) => { res.render("index") })
/* GET home page. */
router.get("/:category/:alcoholic", function (req, res) {
  Cocktail.find({ "category": req.params.category, "alcoholic": req.params.alcoholic }).then(cocktails => {
    var queryResult = queryResults(cocktails);
    res.json(queryResult);
  }).catch(err => console.log(err));
});

module.exports = router;
