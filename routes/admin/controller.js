const db = require("../../db/models");

const { admin } = db;
module.exports = {
  getAdmins: (req, res, next) => {
    admin
      .findAll({
        include: {
          model: db.blog,
          attributes: ["title", "body", "comment"]
        }
      })
      .then(result => res.send(result))
      .catch(error => rese.send(error));
  }
};
