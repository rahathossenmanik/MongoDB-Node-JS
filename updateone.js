var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
	if (err) throw err;
	var dbo = db.db("NodeDB");
	var myquery = { address: "Valley 345" };
	var newvalues = { $set: {name: "Mickey", address: "Canyon 123" } };
	dbo.collection("Customers").updateOne(myquery, newvalues, function(err, obj) {
		if (err) throw err;
		console.log("1 Row Document Updated!");
		db.close();
	});
});