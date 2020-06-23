const mongodb = require("mongodb");

const mongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
    mongoClient.connect("mongodb+srv://ayush:ayush@123@vehciletracker-3073r.mongodb.net/vehicle?retryWrites=true&w=majority").then((client) => {
        console.log("Connection to db is successful");
        _db = client.db("vehicle");
        callback();
    }).catch((err) => {
        console.log("ayusuh error " + err);
        throw err;
    });
}

const getDb = () => {
    if (_db) {
        return _db;
    }
    throw "No DB Found";
}

exports.mongoClient = mongoConnect;
exports.getDb = getDb;