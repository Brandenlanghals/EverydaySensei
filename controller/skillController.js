var express = require("express");

var router = express.Router();

// Import the model (skill.js) to use its database functions.
var skill = require("../models/skill");

// Requiring our models

//is type of
var request = require("request");
var typeOf = {
  method: "GET",
  url: "https://wordsapiv1.p.rapidapi.com/words/" + skill + "/typeOf",
  headers: {
    "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
    "x-rapidapi-key": "a5431a964dmsh3fe2f2b97c70f4ep1c2083jsnb0757f5b9779",
    useQueryString: true,
  },
};
request(typeOf, function (error, response, body) {
  if (error) throw new Error(error);
  console.log(body);
});

// Routes
// =============================================================
var hasType = {
  method: "GET",
  url: "https://wordsapiv1.p.rapidapi.com/words/" + skill + "/hasTypes",
  headers: {
    "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
    "x-rapidapi-key": "a5431a964dmsh3fe2f2b97c70f4ep1c2083jsnb0757f5b9779",
    useQueryString: true,
  },
};
request(hasType, function (error, response, body) {
  if (error) throw new Error(error);
  console.log(body);
});

//part of search query

var partOf = {
  method: "GET",
  url: "https://wordsapiv1.p.rapidapi.com/words/" + skill + "/partOf",
  headers: {
    "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
    "x-rapidapi-key": "a5431a964dmsh3fe2f2b97c70f4ep1c2083jsnb0757f5b9779",
    useQueryString: true,
  },
};
request(partOf, function (error, response, body) {
  if (error) throw new Error(error);
  console.log(body);
});

router.post("/api/skill", function (req, res) {
  skill.create(req.body).then(function (skill) {
    console.log(skill);
    res.json(skill);
  });
});

// Export routes for server.js to use.
module.exports = router;
