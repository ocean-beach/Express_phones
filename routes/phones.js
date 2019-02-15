const express = require('express');
const router = express.Router();

const phonesArray = require('../data/phones');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(phonesArray);
});

module.exports = router;
