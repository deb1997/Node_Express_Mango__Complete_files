const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://127.0.0.1:27017';

// Database Name
const dbName = 'college';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    updateDocument(db, function() {
        client.close();
    });
});

const insertDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('student');
    // Insert some documents
    collection.insertMany([
        {
            name : 'Rajan',
            age : 22,
            course : 'CSE'
        },
        {
            name : 'Mahesh',
            age : 21,
            course: 'Mech'
        }
    ], function(err, result) {
        console.log("Inserted 2 documents into the collection");
        callback(result);
    });
};

const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('student');
    // Find some documents
    collection.find({ name : 'Rajan'}).toArray(function(err, docs) {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(docs);
        callback(docs);
    });
};

const updateDocument = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('student');
    // Update document where a is 2, set b equal to 1
    collection.updateOne({ name : 'Rajan' }
        , { $set: { name : 'Rajan Jain' } }, function(err, result) {
            assert.equal(err, null);
            assert.equal(1, result.result.n);
            console.log("Updated the document with the field a equal to 2");
            callback(result);
        });
};