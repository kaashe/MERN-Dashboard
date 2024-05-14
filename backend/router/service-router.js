const express = require('express');
const { getService } = require('../controllers/service.controller');
const router = express.Router();

router.route("/service").get(getService);
module.exports = router;