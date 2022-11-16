var express = require('express');
const window_controlers= require('../controllers/window');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('window', {title:'Search Results window'});
// });
/* GET detail window page */ 
router.get('/detail', window_controlers.window_view_one_Page);
/* GET window */ 
router.get('/', window_controlers.window_view_all_Page );
/* GET create window page */ 
router.get('/create', window_controlers.window_create_Page); 
/* GET create update page */ 
router.get('/update', window_controlers.window_update_Page); 
/* GET delete costume page */ 
router.get('/delete', window_controlers.window_delete_Page); 
// GET request for one window. 
router.get('/windows/:id', window_controlers.window_detail); 
module.exports = router;
 

 
