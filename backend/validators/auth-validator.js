const {z} = require ('zod');

const signUpSchema = z.object({
    username:z.string({required_error:"username is required"}).trim()
    .min(3,{message:"username:min 3 characters"})
    .max(20,{message:"username:max 20 characters"}),

    email:z.string({required_error:"email is required"}).trim()
    .email(3,{message:"iunvalid email"}),

    phone:z.string({required_error:"phone is required"}).trim()
    .min(6,{message:"phone:min 6 characters"})
    .max(10,{message:"phone:max 10 characters"}),

    password:z.string({required_error:"password is required"}).trim()
    .min(3,{message:"password:min 3 characters"})
    .max(6,{message:"password:max 6 characters"}),
    isAdmin: z.boolean()
})
const signInSchema = z.object({
    email:z.string({required_error:"email is required"}).trim()
    .email(3,{message:"iunvalid email"}),

    password:z.string({required_error:"password is required"}).trim()
    .min(3,{message:"password:min 3 characters"})
    .max(6,{message:"password:max 6 characters"}),
})
module.exports = {signUpSchema,signInSchema}; 