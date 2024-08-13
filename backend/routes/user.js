const express = require("express");
const router = express.Router();


const { createUser } = require("../controller/createUser");
const { getUser } = require("../controller/getUsers");
const {deleteAlluser}=require("../controller/deleteAlluser");



router.post("/createUser", createUser);
router.get("/getallUsers", getUser);
router.delete("/deleteAll",deleteAlluser);


module.exports = router;
