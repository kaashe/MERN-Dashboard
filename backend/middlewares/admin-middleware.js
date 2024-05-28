const adminMiddleware = async (req,resp,next)=>{
    try {
        console.log(req.user);
        const isAdminRole = req.user.isAdmin;
        if(!isAdminRole){
            resp.status(403).json({message:"Access Denied. User isn't Admin"})
        }
        next();
    } catch (error) {
        next(error)
    }
}
module.exports = adminMiddleware;