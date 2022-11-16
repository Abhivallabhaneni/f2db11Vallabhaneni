var window = require('../models/window'); 
 
// List of all windows 
exports.window_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: window list'); 
}; 

// List of all windows 
exports.window_list = async function(req, res) { 
    try{ 
        thewindows = await window.find(); 
        res.send(thewindows); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// // for a specific window. 
exports.window_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: window detail: ' + req.params.id); 
}; 
// for a specific window. 
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
// List of all windows 
exports.window_detail = async function(req, res) { 
    try{ 
        thewindows = await window.find(); 
        res.send(thewindows); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle window create on POST. 
exports.window_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: window create POST'); 
}; 
 
// List of all windows 
exports.window_create_post = async function(req, res) { 
    try{ 
        thewindows = await window.find(); 
        res.send(thewindows); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// Handle window delete form on DELETE. 
exports.window_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: window delete DELETE ' + req.params.id); 
}; 
// Handle window delete on DELETE. 
exports.window_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await window.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
 
// List of all windows 
exports.window_delete = async function(req, res) { 
    try{ 
        thewindows = await window.find(); 
        res.send(thewindows); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 




// Handle window update form on PUT. 
// exports.window_update_put = function(req, res) { 
//     res.send('NOT IMPLEMENTED: window update PUT' + req.params.id); 
// }; 

// List of all windows 
// exports.window_update_put = async function(req, res) { 
//     try{ 
//         thewindows = await window.find(); 
//         res.send(thewindows); 
//     } 
//     catch(err){ 
//         res.status(500); 
//         res.send(`{"error": ${err}}`); 
//     }   
// }; 

// Handle window update form on PUT. 
exports.window_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await window.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.item)toUpdate.item = req.body.item; 
        if(req.body.quantity) toUpdate.quantity = req.body.quantity; 
        if(req.body.cost) toUpdate.cost = req.body.cost; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 
//Handle building the view for updating a window. 
// query provides the id 
exports.window_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await window.findById(req.query.id) 
        res.render('windowupdate', { title: 'window Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle a delete one view with id from query 
exports.window_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await window.findById(req.query.id) 
        res.render('windowdelete', { title: 'window Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle building the view for creating a window. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.window_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('windowcreate', { title: 'window Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a show one view with id specified by query 
exports.window_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await window.findById( req.query.id) 
        res.render('windowdetail',  
{ title: 'window Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// VIEWS 
// Handle a show all view 
exports.window_view_all_Page = async function(req, res) { 
    try{ 
        thewindows = await window.find(); 
        res.render('windows', { title: 'window Search Results', results: thewindows }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// Handle window create on POST. 
exports.window_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new window(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"window_type":"goat", "cost":12, "size":"large"} 
    document.item = req.body.item; 
    document.quantity = req.body.quantity; 
    document.cost = req.body.cost; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   

}; 
