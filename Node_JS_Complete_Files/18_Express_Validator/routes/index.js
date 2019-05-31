const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
// Express Validator
const { check, validationResult } = require('express-validator/check');

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

/* GET home page. */
router.get('/', function(req, res, next) {
    let errors = [ { location: '',
        param: '',
        value: '',
        msg: '' }
    ];
    let user = {
        email : req.body.email,
        password : req.body.password,
        c_password : req.body.c_password
    };
  res.render('index', {errors : errors , user : user});
});

/* POST Request for Register Form */
router.post('/register', [
    check('email').isEmail(),
    check('password').isLength({min : 5}),
    check('c_password').custom((value,{req}) => {
        if(value !== req.body.password){
            throw new Error('Passwords Not Matched');
        }
        else{
            return true;
        }
    })
] ,urlencodedParser, (req, res) => {
    let user = {
        email : req.body.email,
        password : req.body.password,
        c_password : req.body.c_password
    };
    // validation Results
    let errors = validationResult(req).array();
    res.render('index',{errors : errors , user : user});
});

module.exports = router;
