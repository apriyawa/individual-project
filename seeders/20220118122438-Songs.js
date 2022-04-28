'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Songs', [{
      title: "Even Flow",
      description: "Created 1995, by steve Bumbps",
      ArtistId: 2,
      UserId: 1,
      songGenre: "Rock",
      status: "Active",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Dat Stick",
      description: "A rap song vreated by brian immanuel",
      ArtistId: 5,
      UserId: 1,
      songGenre: "Rap",
      status: "Active",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      title: "Love nobody but you",
      description: "Persona created in 20-10. A rock worship music",
      ArtistId: 4,
      UserId: 1,
      songGenre: "Gospel",
      status: "Active",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      title: "Star Syndrome",
      description: "This is description contenct for start syndrome",
      ArtistId: 4,
      UserId: 1,
      songGenre: "full time",
      status: "Post Progressive",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      title: "Nematomorpha",
      description: "Let me know first out at 1998 in US, majoring hit in CLA",
      ArtistId: 1,
      UserId: 1,
      songGenre: "Pop",
      status: "Active",
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
