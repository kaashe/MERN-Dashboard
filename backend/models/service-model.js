const {Schema,model} = require("mongoose");

const ServcesSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    providedTo:{
        type:String,
        required:true,
    },
    shortMessage:{
        type:String,
        required:true,
    },
    
});
const Service = new model("services",ServcesSchema);
module.exports = Service;