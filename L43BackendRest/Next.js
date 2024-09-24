const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

// Set views directory and view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Use body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Route for home page
app.get('/', (req, res) => {
    res.render('index');
});

// Route for submitting form data
app.post('/submit', (req, res) => {
    const { username, content } = req.body;
    
    // Process data here if needed
    
    // Redirect to new page or render new template
    res.redirect('/new'); // or res.render('new', { username, content });
});

// Route for new page
app.get('/new', (req, res) => {
    res.render('new');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
