const User = require("../models/userModel");
const getAllUsers = async (req,resp)=>{
    try {
        const users = await User.find({},{password:0});
        if(!users || users?.length===0){
            return resp.status(401).json({message:"users not found!"})
        }
        resp.status(200).json(users)
    } catch (error) {
        
    }
}
module.exports = getAllUsers;