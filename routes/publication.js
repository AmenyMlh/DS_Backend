const express = require("express")
const router = express.Router()
const auth = require("../middlewares/auth")
const pubController = require("../controllers/publication")




router.post("/addPub", auth.loggedMiddleware,auth.isAuthor,pubController.addPub)
router.post("/:id", auth.loggedMiddleware,auth.isAuthor,pubController.getPubById)
router.post("/posts/author/details", auth.loggedMiddleware,auth.isAuthor,pubController.getPubandAuth)




module.exports = router