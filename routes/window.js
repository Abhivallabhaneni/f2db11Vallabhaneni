var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('window', { title: 'Search Results window' });
});

module.exports = router;
