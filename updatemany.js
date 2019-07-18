var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
	if (err) throw err;
	var dbo = db.db("NodeDB");
	var myquery = { address: /^S/ };
	var newvalues = {$set: {name: "Minnie"} };
	dbo.collection("Customers").updateMany(myquery, newvalues, function(err, obj) {
		if (err) throw err;
		console.log(obj.result.nModified + " document(s) updated");
		db.close();
	});
});