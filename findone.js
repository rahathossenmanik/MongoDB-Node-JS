var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
	if (err) throw err;
	var dbo = db.db("NodeDB");
	var myobj = { name: "Company Inc", address: "Highway 37" };
	dbo.collection("Customers").findOne({}, function(err, result) {
		if (err) throw err;
		console.log(result.name + " - " + result.address);
		db.close();
	});
});