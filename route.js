const express = require("express")
const personController =require("./controller")
const router = express.Router()

router

router.post("/addPerson", personController.addPerson);
router.get("/getPerson",personController.getAllUsers);
module.exports = router;