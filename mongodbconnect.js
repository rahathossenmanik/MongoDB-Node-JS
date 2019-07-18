var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";
MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
	if (err) throw err;
	console.log("MongoDB Connected!");
	db.close();
});