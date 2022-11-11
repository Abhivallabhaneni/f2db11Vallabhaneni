var window = require('../models/window');
// List of all Costumes
exports.window_list = function(req, res) {
 res.send('NOT IMPLEMENTED: window list');
};
// for a specific Costume.
// for a specific Costume. 
exports.window_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await window.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
// Handle window create on POST.
exports.window_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: window create POST');
};
// Handle Costume delete form on DELETE.
exports.window_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: window delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.window_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: window update PUT' + req.params.id);
};
// VIEWS

   // List of all Costumes
exports.window_list = async function(req, res) {
    try{
    thewindow = await window.find();
    res.send(thewindow);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   // VIEWS
// Handle a show all view
exports.window_view_all_Page = async function(req, res) {
    try{
    thewindow = await window.find();
    res.render('window', { title: 'window Search Results', results: thewindow });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   // Handle Costume create on POST.
exports.window_create_post = async function(req, res) {
    console.log(req.body)
    let document = new window();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.window_type = req.body.window_type;
    document.size = req.body.size;
    document.cost = req.body.cost;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
}
// Handle window update form on PUT. 
exports.window_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await window.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.window_type)  
               toUpdate.window_type = req.body.window_type; 
        if(req.body.cost) toUpdate.size = req.body.size; 
        if(req.body.size) toUpdate.cost = req.body.cost; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 