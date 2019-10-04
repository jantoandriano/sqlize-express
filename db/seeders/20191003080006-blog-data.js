'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Blogs', [{
      title: 'web fullstack developer',
      body: 'tech stack : reactjs, mongoodb, nodejs',
      comment: 'jangan masuk disini, disini berbahaya',  
      adminId: 2,  
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Apex legend',
      body: 'the best game of 2019',
      comment: 'tai lah',  
      adminId: 3,  
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
