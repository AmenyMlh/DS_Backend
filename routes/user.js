const express = require("express")
const router = express.Router()
const auth = require("../middlewares/auth")
const userController = require("../controllers/user")




router.post("/add-admin", userController.addAdmin)
router.post("/register", userController.register)
router.post("/signin", userController.signin)


module.exports = router