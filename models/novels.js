const novels = (connection, Sequlize, authors) => connection.define('novels'), {
    id : { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    titlet: { type: Sequelize.STRING },
    authorId: { type: Sequelize.INTEGER, references: {model: authors, key: 'id' } }
}, { paranoid: true })

module.exports = novels
