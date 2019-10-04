const express = require("express")
const route = express.Router()
const blogController = require("./controller")

route.post("/addblog", blogController.addBlog)
route.get("/", blogController.getBlogs)
route.get("/:adminId", blogController.getBlog)
route.delete("/:adminId", blogController.deleteBlog)
route.put("/:adminId", blogController.updateBlog)

module.exports = route