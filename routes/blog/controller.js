const db = require("../../db/models");

const { blog } = db;
module.exports = {
  addBlog: (req, res, next) => {
    blog
      .create(req.body)
      .then(result => res.send(result))
      .catch(error => res.send(error));
  },
  getBlogs: (req, res, next) => {
    blog
      .findAll()
      .then(result => res.send(result))
      .catch(error => res.send(error));
  },
  getBlog: (req, res, next) => {
    blog
      .findAll({
        where: {
          adminId: req.body.adminId
        }
      })
      .then(result => res.send(result))
      .catch(error => res.send(error));
  },
  deleteBlog: (req, res, next)=> {
    blog.destroy({
      where:{
        adminId : req.body.adminId
      }
    })
  },
  updateBlog: (req, res, next) => {
    blog.update({
      where: {
        adminId: req.body.adminId
      }
    })
  }
};
