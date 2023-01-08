
const express = require ("express")

const router = express.Router()

const auth = require("../middlewares/auth")
const isAdmin = require("../middlewares/isAdmin")

const UsersController = require ("../controllers/UsersController")


router.get("/", UsersController.getAllUsers)
router.post("/login", UsersController.loginUser)
router.post("/",UsersController.newUser)
router.put("/", UsersController.updateUser)
router.delete("/", UsersController.deleteUser)
router.post("/name", UsersController.getUsersByName)
router.get("/profile/:_id", UsersController.getUserById)
router.delete("/admin/deleteuser", UsersController.deleteUser)

module.exports = router