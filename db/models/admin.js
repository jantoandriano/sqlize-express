'use strict';
module.exports = (sequelize, DataTypes) => {
  const admin = sequelize.define('admin', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    address: DataTypes.STRING,
    gender: DataTypes.STRING
  }, {});
  admin.associate = function(models) {
    // associations can be defined here
    admin.hasMany(models.blog)
  };
  return admin;
};