const express = require("express")
const router = express.Router()
const userController = require("../Controller/userController")
const authController = require('../Controller/authController')


router.route('/signup').post(authController)

router.route("/").get(userController.getAllUsers).post(userController.createUser)
router.route("/:userId").delete(userController.deleteUser).patch(userController.updateUser)

module.exports = router
