var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
	if (err) throw err;
	var dbo = db.db("NodeDB");
	var myquery = { address: 'Mountain 21' };
	dbo.collection("Customers").deleteOne(myquery, function(err, result) {
		if (err) throw err;
		console.log("1 Row Document Deleted!");
		db.close();
	});
});