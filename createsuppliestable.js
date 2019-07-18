var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
	if (err) throw err;
	var dbo = db.db("NodeDB");
	var myobj = [
		{ _id: 154, name: 'Chocolate Heaven' },
		{ _id: 155, name: 'Tasty Lemons' },
		{ _id: 156, name: 'Vanilla Dreams' }
	];
	dbo.collection("Supplies").insertMany(myobj, function(err, res) {
		if (err) throw err;
		console.log("Number of documents inserted: " + res.insertedCount);
		db.close();
	});
});