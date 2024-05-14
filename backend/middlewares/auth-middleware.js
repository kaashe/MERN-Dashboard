const jwt = require('jsonwebtoken');
const User = require('../models/userModel');


const authMiddleware = async (req, resp, next) => {
    const token = req.header("Authorization")
    if (!token) {
        return resp.status(401).json({ msg: "unauthorized HTTP, Token not provided" })
    }
    console.log('token from auth middleware', token);
    const jwtToken = token.replace("Bearer", "").trim();
    console.log('jwtToken', jwtToken);
    try {
        const isVerified  = jwt.verify(jwtToken,process.env.JWT_SECRETE_KEY);
        const userData = await User.findOne({email:isVerified.email}).select({password:0})
        console.log(userData,'data is verifed');
        req.user = userData;
        req.token = token;
        req.userID = userData._id
        next();
    } catch (error) {

        return resp.status(401).json({ msg: "unauthorized , invalid Token!" })
    }
}
module.exports = authMiddleware;