const express = require('express');
const { login, register, user } = require('../controllers/auth-controller');
const validate = require('../middlewares/validateMiddleware');
const {signUpSchema,signInSchema} = require('../validators/auth-validator');
const authMiddleware = require('../middlewares/auth-middleware')
validate
const router = express.Router();

 router.route('/sign-in').post(validate(signInSchema),login)
 router.route('/sign-up').post(validate(signUpSchema), register)
 router.route('/user').get(authMiddleware, user)
 module.exports = router;