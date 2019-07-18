var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
	if (err) throw err;
	var dbo = db.db("NodeDB");
	dbo.collection("Customers").find().limit(8).toArray(function(err, result) {
		if (err) throw err;
		console.log(result);
		db.close();
	});
});