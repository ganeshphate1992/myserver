var mongo = require('mongodb')
async function getDBCon() {
    var url = "mongodb+srv://ganeshphate1992:4P3QLSafKhfiM21y@cluster0.zegr7.mongodb.net/"
    // MongoDB server- Database - collection - document
    try{
        var mongoClient = mongo.MongoClient
        console.log(process.env.DB_CONN_URL);
        var server = await mongoClient.connect(process.env.DB_CONN_URL) //process.env.DB_CONN_URL
        var db = server.db("school")
        return db;
    }
    catch(err){
        console.log(err);
    }
}

module.exports = getDBCon