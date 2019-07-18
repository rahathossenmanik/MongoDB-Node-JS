var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
	if (err) throw err;
	var dbo = db.db("NodeDB");
	var myobj = [
		{ _id: 1001, name: 'Chocolate Heaven'},
		{ _id: 1002, name: 'Tasty Lemon'},
		{ _id: 1003, name: 'Vanilla Dream'}
	];
	dbo.collection("Products").insertMany(myobj, function(err, result) {
		if (err) throw err;
		console.log(result);
		db.close();
	});
});