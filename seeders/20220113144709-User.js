'use strict';
const { hashPassword } = require('../helpers/hash-helper'); 
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      username: "userbias2",
      email: "userbiasa212@mail.com",
      password: hashPassword("mntp2121"),
      role: "Staff",
      address: "Indonesia",
      phoneNumber: "+681131118",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', [{
      username: "userbiasa",
      email: "userbiasa21@mail.com",
      password: hashPassword("mntp2121"),
      role: "Staff",
      address: "Indonesia",
      phoneNumber: "+681131118",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
