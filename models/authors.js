
const Authors = (connection, Sequlize) => {
    return connection.define('authors', {
        id : { type: Sequlize.INTEGER, autoIncrement: true, primaryKey: true },
        nameFirst: { type: Sequlize.STRING },
        nameLast: { type: Sequlize.STRING }
    })
}

module.exports = Authors
