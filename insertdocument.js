var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
	if (err) throw err;
	var dbo = db.db("NodeDB");
	var myobj = { name: "Company Inc", address: "Highway 37" };
	dbo.collection("Customers").insertOne(myobj, function(err, res) {
		if (err) throw err;
		console.log("1 Row Document Inserted!");
		db.close();
	});
});