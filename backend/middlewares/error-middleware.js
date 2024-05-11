const errorMiddleware = (err,req,res,next)=>{
const status = err.status||500;
const message= err||'something went wrong!'
const extraDetails = err.extraDetails||'error from backeend'
return res.status(status).json({message,extraDetails})

}
module.exports = errorMiddleware;