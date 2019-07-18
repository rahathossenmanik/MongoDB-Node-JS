var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
	if (err) throw err;
	var dbo = db.db("NodeDB");
	dbo.collection('Products').aggregate([
    { $lookup:
		{
			from: 'Supplies',
			localField: 'product_id',
			foreignField: '_id',
			as: 'orderdetails'
		}
    }
    ]).toArray(function(err, res) {
		if (err) throw err;
		console.log(JSON.stringify(res));
		db.close();
	});
});