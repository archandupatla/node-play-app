const mongodb = require('mongodb');
const mongoclient = mongodb.MongoClient;
let _db;
const mongoConnect = (callback)=>{
mongoclient.connect('mongodb+srv://abilash:india143@cluster0-qcy7w.mongodb.net/test?retryWrites=true&w=majority').then(
    client => {
        console.log('sucessfully connected');
        _db = client.db()
        callback();
    }
).catch(error=>console.log(error))
}
const exportDB = ()=>{
    if(_db){
        return _db;
    }
    //throw new Error('No db found');
}
exports.mongoConnect = mongoConnect;
exports.exportDB = exportDB;