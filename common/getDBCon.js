var mongo = require('mongodb')
async function getDBCon() {
    var url = "mongodb+srv://ganeshphate1992:4P3QLSafKhfiM21y@cluster0.zegr7.mongodb.net/"
    // MongoDB server- Database - collection - document
    var mongoClient = mongo.MongoClient
    var server = await mongoClient.connect(url)
    var db = server.db("school")
    return db;
}

module.exports = getDBCon