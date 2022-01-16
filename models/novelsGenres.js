const novelsGenres = (connection, Sequlize, genres, novels) => connection.define('novelsGenres'), {
    novelId: { type: Sequelize.INTEGER, primary key: true,  references: {model: novels, key: 'id' } 
    genreId: { type: Sequelize.INTEGER, primary key: true,  references: {model: genres, key: 'id' } 
}, { paranoid: true })

module.exports = novelsGenres