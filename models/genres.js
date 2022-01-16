const genres = (connection, Sequlize) => connection.define('genres'), {
    id : { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING }
}, { paranoid: true })

module.exports = genres