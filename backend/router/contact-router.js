const express = require("express");
const contactForm = require("../controllers/contact-controller");
const validate = require("../middlewares/validateMiddleware");
const contactSchema = require("../validators/conact-validator");
const router = express.Router();

router.route("/contact").post(validate(contactSchema), contactForm);
module.exports = router;
