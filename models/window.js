const mongoose = require("mongoose")
const windowSchema = mongoose.Schema({
window_type: {
    type:String,
    required:true
},
size: {
    type:String,
    required:true
},
cost: {
    type:Number,
    min:1,
    max:100
}
})
module.exports = mongoose.model("window",
windowSchema)