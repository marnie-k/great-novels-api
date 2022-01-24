
const Genres = (connection, Sequlize) => {
    return connection.define('genres', {
    id : { type: Sequlize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequlize.STRING } 
    })
}
module.exports = Genres
