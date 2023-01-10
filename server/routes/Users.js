const express = require("express");
const router = express.Router()
const User = require("../controllers/UserController.js")

router.post('/fanSign', User.fanSignup)
router.post('/talentSign', User.talentSignup)

module.exports = router;
