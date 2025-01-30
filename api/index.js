const express = require("express");
const router = express.Router();
const registerRoute = require('./userLogin');
const loginRoute = require('./login');

router.use(express.json());

router.use("/register", registerRoute);
router.use("/login", loginRoute);


module.exports = router;