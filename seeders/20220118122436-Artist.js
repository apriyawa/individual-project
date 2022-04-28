'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Artists', [{
      name: "4twenty",
      artistLogo: "https://www.youtube.com/embed/QZvbHQXQpjs",
      location: "Jakarta, Indonesia",
      email: "4twenty@management.com",
      description: "Indie band from south Jakarta",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "PearlJam",
      artistLogo: "https://www.youtube.com/embed/CxKWTzr-k6s",
      location: "United States",
      email: "PJ@management.com",
      description: "Pearl Jam is an American rock band formed in Seattle, Washington, in 1990.",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Audioslave",
      artistLogo: "https://www.youtube.com/embed/7QU1nvuxaMA",
      location: "United States",
      email: "as@Warner.com",
      description: "Audioslave was an American rock supergroup formed in Glendale, California, in 2001.",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: "Kirk Franklin",
      artistLogo: "https://www.youtube.com/embed/3aD8OK07iIY",
      location: "United States",
      email: "kirkmanagement@mail.com",
      description: "Kirk Dewayne Franklin is an American choir director, gospel singer, dancer, songwriter, and author. ",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: "Rich Brian",
      artistLogo: "https://www.youtube.com/embed/rzc3_b_KnHc",
      location: "United States/ Indonesia",
      email: "RB@miller.com",
      description: "Brian Imanuel Soewarno, known professionally as Rich Brian, is an Indonesian rapper, singer, songwriter, and record producer. ",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
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
    await queryInterface.bulkDelete('Artists', [{
      name: "4twenty",
      artistLogo: "https://www.youtube.com/watch?v=QZvbHQXQpjs",
      location: "Jakarta, Indonesia",
      email: "4twenty@management.com",
      description: "Indie band from south Jakarta",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "PearlJam",
      artistLogo: "https://www.youtube.com/watch?v=CxKWTzr-k6s",
      location: "United States",
      email: "PJ@management.com",
      description: "Pearl Jam is an American rock band formed in Seattle, Washington, in 1990. The band's lineup consists of founding members Jeff Ament, Stone Gossard, Mike McCready, and Eddie Vedder, as well as Matt Cameron, who joined in 1998. Keyboardist Boom Gaspar has also been a touring/session member with the band since 2002.",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Audioslave",
      artistLogo: "https://www.youtube.com/watch?v=7QU1nvuxaMA",
      location: "United States",
      email: "as@Warner.com",
      description: "Audioslave was an American rock supergroup formed in Glendale, California, in 2001. The four-piece band consisted of Soundgarden's lead singer and rhythm guitarist Chris Cornell with Rage Against the Machine members Tom Morello, Tim Commerford, and Brad Wilk.",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: "Kirk Franklin",
      artistLogo: "https://www.youtube.com/watch?v=3aD8OK07iIY",
      location: "United States",
      email: "kirkmanagement@mail.com",
      description: "Kirk Dewayne Franklin is an American choir director, gospel singer, dancer, songwriter, and author. He is best known for leading urban contemporary gospel choirs such as The Family, God's Property, and One Nation Crew among many others. He has won numerous awards, including 16 Grammy Awards.",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: "Rich Brian",
      artistLogo: "https://www.youtube.com/watch?v=rzc3_b_KnHc",
      location: "United States/ Indonesia",
      email: "RB@miller.com",
      description: "Brian Imanuel Soewarno, known professionally as Rich Brian, is an Indonesian rapper, singer, songwriter, and record producer. He is known for his viral debut single Dat $tick, which was first released in March 2016 on SoundCloud. The single was later certified gold by RIAA.",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};