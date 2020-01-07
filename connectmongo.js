var mongo = require('mongodb');

mongo.connect("mongodb://localhost:27017/users", (err, db) => {
    if (err) throw err;
    console.log("tame V01D tgr05 connect mongodb success")
})