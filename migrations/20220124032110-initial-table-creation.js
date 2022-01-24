
const { query } = require("express");

module.exports = {
  async up (queryInterface, Sequelize) {
  
    await queryInterface.createTable('authors', {
        id : { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        nameFirst: { type: Sequelize.STRING },
        nameLast: { type: Sequelize.STRING },
        createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')},
        updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')},
        deletedAt: { type: Sequelize.DATE },
    })
    await queryInterface.createTable('genres', {
        id : { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        name: { type: Sequelize.STRING },
        createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')},
        updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')},
        deletedAt: { type: Sequelize.DATE }, 
    })
    await queryInterface.createTable('novels', {
        id : { type: Sequlize.INTEGER, autoIncrement: true, primaryKey: true },
        title: { type: Sequlize.STRING },
        authorId: { type: Sequlize.INTEGER, references: {model: 'authors', key: 'id' } },   
        createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')},
        updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')},
        deletedAt: { type: Sequelize.DATE },  
    })
    await queryInterface.createTable('novelsGenres', {
        genreId: { type: Sequlize.INTEGER, primaryKey: true, references: {model: 'genres', key: 'id' } },
        novelId: { type: Sequlize.INTEGER, primaryKey: true, references: {model: 'novels', key: 'id' } },
        createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')},
        updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')},
        deletedAt: { type: Sequelize.DATE }, 
    })
  },

  async down (queryInterface, Sequelize) {
  
     await quertInterface.dropTable('novelsGenres')
     await quertInterface.dropTable('novels')
     await quertInterface.dropTable('genres')
     
     return quertInterface.dropTable('authors')
  }
};
