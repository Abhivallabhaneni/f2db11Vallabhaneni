var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('window', { title: 'Search Results window' });
});
var express = require('express');
const window_controlers= require('../controllers/window');
var router = express.Router();
/* GET costumes */
router.get('/', window_controlers.window_view_all_Page );
// GET request for one window. 
router.get('/window/:id', window_controlers.window_detail); 
module.exports = router;