const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const hostname = '127.0.0.1';
const port = 3000;

// Serve the Static Files
app.use('/public', express.static('public'));

// for EJS Template Engine
app.set('view engine', 'ejs');

// get request for home page
app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'views','index.html'));
});

// get request for about us page
app.get('/about',(req,res) => {
    res.sendFile(path.join(__dirname,'views','about.html'));
});

// get request for contact us page with Query Strings
app.get('/contact',(req,res) => {
    let queries = req.query;
    console.log(queries);
    res.sendFile(path.join(__dirname,'views','contact.html'));
});

// get request for services us page
app.get('/services',(req,res) => {
    res.sendFile(path.join(__dirname,'views','services.html'));
});

// GET request for profile us page
app.get('/profile',(req,res) => {
    res.sendFile(path.join(__dirname,'views','profile.html'));
});

// get request for profile with parameters
app.get('/profile/:id',(req,res) => {
    let param = req.params;
    console.log(param);
    res.sendFile(path.join(__dirname,'views','profile.html'));
});

// GET Request for Feedback Page
app.get('/feedback',(req,res) => {
    res.sendFile(path.join(__dirname,'views','feedback.html'));
});

// POST Request for Feedback form
app.post('/feedback-form',urlencodedParser,(req,res)=>{
    // form handling logic
    let feedback = req.body;
    console.log(feedback);
    res.render(path.join(__dirname,'views','feedback-success.ejs'),{feedback:feedback});
});

// for 404 requests
app.use((req,res) => {
    res.sendFile(path.join(__dirname,'views','404.html'));
});

app.listen(port,hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});