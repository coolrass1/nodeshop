
const mongoose=require("mongoose")


const TaskSchema= mongoose.Schema({
    Title:String,
    Description:String
})



module.exports = mongoose.model('Task',TaskSchema);