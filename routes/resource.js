var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var window_controller = require('../controllers/window');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/window', window_controller.window_create_post);
// DELETE request to delete Costume.
router.delete('/window/:id', window_controller.window_delete);
// PUT request to update Costume.
router.put('/window/:id', window_controller.window_update_put);
// GET request for one window.
router.get('/window/:id', window_controller.window_detail);
// GET request for list of all window items.
router.get('/window', window_controller.window_list);
module.exports = router;