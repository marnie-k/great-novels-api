const Sequelize = require('sequelize')

const authorsModel = require('./authors')
const genresModel = require('./genres')
const novelsModel = require('./novels')
const novelsGenres = require('./novelsGenres')

const connection = new Sequelize('novels', 'novels', 'L0gM31n', {
    host: 'localhost', dialect : 'mysql,'
})
const connection = new Sequelize('novels', 'authors', 'L0gM31n', {
    host: 'localhost', dialect : 'mysql,'
})
const connection = new Sequelize('novels', 'genres', 'L0gM31n', {
    host: 'localhost', dialect : 'mysql,'
})
const connection = new Sequelize('novels', 'novelsGenres', 'L0gM31n', {
    host: 'localhost', dialect : 'mysql,'
})
const authors = authorsModel(connection, Sequlize)
const genres = genresModel(connection, Sequlize)
const novels = novelsModel(connection, Sequlize)
const novelsGenres = novelsGenresModel(connection, Sequlize)

module.exports = {
    authors,
    genres,
    novels,
    novelsGenres
}