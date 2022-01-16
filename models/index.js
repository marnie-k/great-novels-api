const Sequelize = require('sequelize')

const authorsModel = require('./authors')
const genresModel = require('./genres')
const novelsModel = require('./novels')
const novelsGenres = require('./novelsGenres')

const connection = new Sequelize('novels', 'novels', 'L0gM31n', {
    host: 'localhost', dialect : 'mysql,'
})

const authors = authorsModel(connection, Sequlize)
const genres = genresModel(connection, Sequlize)
const novels = novelsModel(connection, Sequlize, authors)
const novelsGenres = novelsGenresModel(connection, Sequlize, genres, novels)

novels.belongsTo(authors)
authors.hasMany(novels)

genres.belongsToMany(novels, {through: novelsGenres})
novels.belongsToMany(genres, {through: novelsGenres})

module.exports = {
    authors,
    genres,
    novels,
    novelsGenres
}