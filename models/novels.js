const Novels = (connection, Sequlize, Authors) => {
    return connection.define('novels', {
    id : { type: Sequlize.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: Sequlize.STRING },
    authorId: { type: Sequlize.INTEGER, references: {model: Authors, key: 'id' } }    
    })
}
module.exports = Novels
    