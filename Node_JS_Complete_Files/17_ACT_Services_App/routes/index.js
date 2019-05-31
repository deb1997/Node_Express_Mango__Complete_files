const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
// Load the Mongo DB Opeations
const getDB = require('../database/dbOpeations').getDB;

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET Raise Complaints page. */
router.get('/raise', function(req, res, next) {
    res.render('raise-complaints');
});


/* GET List of Complaints page. */
router.get('/list', function(req, res, next) {
    // get data from database
    const db = getDB();
    db.collection('complaints').find({}).toArray((err,complaints) => {
        if(err){
            return console.log(err);
        }
        res.render('list-of-complaints',{complaints : complaints});
    });
});

/* POST Raise Complaints Form Handling */
router.post('/raise-complaint',urlencodedParser, function(req, res, next) {
    let complaint = req.body;
    // Insert the data into database
    const db = getDB();
    db.collection('complaints').insertOne(complaint,(err , data) => {
        if(err) throw err;
        res.render('raise-complaints-success', {complaint : complaint});
    });
});

module.exports = router;
