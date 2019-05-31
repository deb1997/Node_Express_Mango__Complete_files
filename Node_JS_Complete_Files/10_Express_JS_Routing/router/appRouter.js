const path = require('path');

let mapRoutes = (app) => {
    // Routing Logic

    // for Index Page
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname,'..','views','index.html'));
    });

    // for About Page
    app.get('/about', (req, res) => {
        res.sendFile(path.join(__dirname,'..','views','about.html'));
    });

    // for Services Page
    app.get('/services', (req, res) => {
        res.sendFile(path.join(__dirname,'..','views','services.html'));
    });

    // for Contact Page
    app.get('/contact', (req, res) => {
        res.sendFile(path.join(__dirname,'..','views','contact.html'));
    });

    // for 404 page
    app.use((req,res) => {
        res.sendFile(path.join(__dirname,'..','views','404.html'));
    });
};

module.exports = {
    mapRoutes
};