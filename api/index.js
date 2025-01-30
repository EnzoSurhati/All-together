const express = require("express");
const router = express.Router();
const registerRoute = require('./register');
const loginRoute = require('./login');
const aboutMeRoute = require('./aboutme');
const allusersRoute = require('./allusers');
const singleuserRoute = require('./singleuser');
const deleteuserRoute = require('./deleteuser');
const updateuserRoute = require('./updateuser');

router.use(express.json());

router.use("/register", registerRoute);
router.use("/login", loginRoute);
router.use("/aboutme", aboutMeRoute);
router.use("/allusers", allusersRoute); 
router.use("/singleuser", singleuserRoute);
router.use("/deleteuser", deleteuserRoute);
router.use("/updateuser", updateuserRoute);

module.exports = router;