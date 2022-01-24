const Sequelize = require('sequelize')
const allConfigs = require('../config/sequelize')
const environment = process.env.NODE_ENV || 'development'
const { username, password, database, host, dialect } = allConfigs[environment]

const AuthorsModel = require('./authors')
const GenresModel = require('./genres')
const NovelsModel = require('./novels')
const NovelsGenresModel = require('./novelsGenres')

const connection = new Sequelize(username, password, database,{ host, dialect })

const Authors = AuthorsModel(connection, Sequelize)
const Genres = GenresModel(connection, Sequelize)
const Novels = NovelsModel(connection, Sequelize, Authors)
const NovelsGenres = NovelsGenresModel(connection, Sequelize, Genres, Novels)

Novels.belongsTo(Authors)
Authors.hasMany(Novels)

Genres.belongsToMany(Novels, {through: NovelsGenres})
Novels.belongsToMany(Genres, {through: NovelsGenres})

module.exports = {
    Authors,
    Genres,
    Novels,
    NovelsGenres
}