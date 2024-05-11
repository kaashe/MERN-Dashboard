const express = require('express');
const { login, register } = require('../controllers/auth-controller');
const validate = require('../middlewares/validateMiddleware');
const {signUpSchema,signInSchema} = require('../validators/auth-validator');

validate
const router = express.Router();

 router.route('/sign-in').post(validate(signInSchema),login)
 router.route('/sign-up').post(validate(signUpSchema), register)
 module.exports = router;