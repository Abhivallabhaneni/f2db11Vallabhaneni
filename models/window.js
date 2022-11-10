const mongoose = require("mongoose")
const windowSchema = mongoose.Schema({
window_type: String,
size: String,
cost: Number
})
module.exports = mongoose.model("window",
windowSchema)