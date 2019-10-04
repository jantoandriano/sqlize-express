const express = require("express")
const route = express.Router()
const adminController = require("./controller")

route.get("/", adminController.getAdmins)

module.exports = route;