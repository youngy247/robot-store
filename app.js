const express = require('express');
const mysql = require('promise-mysql');
const exphbs = require('express-handlebars');

const app = express();
const port = 3000;

// Register the template engine as 'handlebars'
app.engine('handlebars', exphbs.engine());

// Set our app to use the handlebars engine
app.set('view engine', 'handlebars');

// Set our app to look for views in the views folder
app.set("views", "./views");

// Serve static files (images, CSS files, and JavaScript files) from the public folder
app.use(express.static('public'))

let context = {title: "My New Blog", content: "The content of the blog!"}

// Specify a route
app.get('/test', (req, res) => {
    // Put the contents of the view "home.handlebars" in the template "main.handlebars"
    res.render('home', context);
});

app.get('/products', async (req, res) => {
    const connection = await mysql.createConnection({
        user: 'root',
        password: 'password',
        database: 'robot_stores'
    });

    const pigs = await connection.query('SELECT * FROM products;');

    res.json(pigs);
});

app.listen(port, () => {
    console.log(`App started and listening on port ${port}`);
});