const Sequelize = require('sequelize')

const novels = (connection, Sequlize) => connection.define('novels'), {
    id : { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    titlet: { type: Sequelize.STRING },
    authorId: { type: Sequelize.INTEGER }
}, { paranoid: true })

module.exports = novels