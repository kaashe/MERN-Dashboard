const Service = require("../models/service-model");


const getService =async (req,resp)=>{
    try {
        const response = await Service.find();
        if(!response){
            resp.status(404).json({massage:'no Services found!'})
            return
        }    
        resp.status(200).json({response})
        
    } catch (error) {
        console.log('services',error);
    }
}
module.exports = { getService };