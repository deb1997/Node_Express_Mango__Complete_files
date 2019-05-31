const express = require('express');
const app = express();
const router = require('./router/appRouter');

const hostname = '127.0.0.1';
const port = 3000;

// Serve the Static Files
app.use('/public', express.static('public'));

// Routing Logic
router.mapRoutes(app);

app.listen(port,hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});