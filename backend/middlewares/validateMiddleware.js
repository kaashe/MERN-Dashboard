const validate =(signUpSchema) =>async(req,resp,next)=>{
    try {
        const parsebody = await signUpSchema.parseAsync(req.body);
        req.body = parsebody
        next()
    } catch (error) {
        const messg = error.errors[0].message;
        next(messg)
    }
}
module.exports = validate