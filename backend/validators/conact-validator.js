const {z} = require ('zod');

const contactSchema = z.object({
    username:z.string({required_error:"username is required"}).trim()
    .min(3,{message:"username:min 3 characters"})
    .max(20,{message:"username:max 20 characters"}),

    email:z.string({required_error:"email is required"}).trim()
    .email(3,{message:"iunvalid email"}),

    message:z.string({required_error:"message is required"}).trim()
    .min(6,{message:"message:min 6 characters"})
    .max(200,{message:"message:max 200 characters"}),
})
module.exports = contactSchema;