var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
	if (err) throw err;
	var dbo = db.db("NodeDB");
	var myobj = { name: "Company Inc", address: "Highway 37" };
	dbo.collection("Customers").find({}, { projection: { _id: 0, name: 1, address: 1} }).toArray(function(err, result) {
		if (err) throw err;
		console.log(result);
		db.close();
	});
});