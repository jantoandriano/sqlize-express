'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Admins', [{
          firstName: 'janto',
          lastName: 'andriano',
          email: 'motulojanto@gmail.com',
          address: 'jakarta',       
          createdAt: new Date(),
          updatedAt: new Date()
        }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Admins', null, {})
  }
};
