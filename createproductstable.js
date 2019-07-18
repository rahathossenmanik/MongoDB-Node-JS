var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
	if (err) throw err;
	var dbo = db.db("NodeDB");
	var myobj = { _id: 1, product_id: 154, status: 1 };
	dbo.collection("Products").insertOne(myobj, function(err, res) {
		if (err) throw err;
		console.log("1 Row Document Inserted!");
		db.close();
	});
});