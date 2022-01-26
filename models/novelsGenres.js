
const NovelsGenres = (connection, Sequlize, Genres, Novels) => {
  return connection.define('novelsGenres', {
    genreId: { type: Sequlize.INTEGER, primaryKey: true, references: { model: Genres, key: 'id' } },
    novelId: { type: Sequlize.INTEGER, primaryKey: true, references: { model: Novels, key: 'id' } },
  })
}

module.exports = NovelsGenres
