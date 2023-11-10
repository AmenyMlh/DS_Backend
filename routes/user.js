const express = require("express")
const router = express.Router()
const auth = require("../middlewares/auth")
const userController = require("../controllers/user")




router.post("/add-admin", auth.loggedMiddleware,userController.addAdmin)
router.post("/register", userController.register)
router.post("/signin", userController.signin)
router.patch("/validate/:id", auth.loggedMiddleware,auth.isAdmin,userController.validateAuthor)


module.exports = router