var express = require('express');
const window_controlers= require('../controllers/window');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('window', {title:'Search Results window'});
// });
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  }
/* GET detail window page */ 
router.get('/detail', window_controlers.window_view_one_Page);
/* GET window */ 
router.get('/', window_controlers.window_view_all_Page );
/* GET create window page */ 
router.get('/create',secured, window_controlers.window_create_Page); 
/* GET create update page */ 
router.get('/update',secured, window_controlers.window_update_Page); 
/* GET delete costume page */ 
router.get('/delete',secured, window_controlers.window_delete_Page); 
// GET request for one window. 
router.get('/window/:id', window_controlers.window_detail); 
module.exports = router;
 

 
